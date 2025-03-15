#!/usr/bin/env node

import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import chalk from "chalk";

(async () => {
  console.log(chalk.green("Powered By CodeEaseX 🚀"));
  console.log(chalk.blue("Welcome to NextJS-Golang Launcher"));
  console.log(
    chalk.blue(
      "This tool sets up a Next.js frontend and a Golang backend automatically.\n"
    )
  );

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "directory",
      message:
        "Enter the directory ('.' for current dir, '..' to go up one level, or full path):",
      default: ".",
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter project name:",
      validate: (input) => (input ? true : "Project name cannot be empty."),
    },
    {
      type: "list",
      name: "languageVariant",
      message: "Which frontend language do you prefer?",
      choices: ["JavaScript", "TypeScript"],
      default: "JavaScript",
    },
    {
      type: "confirm",
      name: "useTailwind",
      message: "Do you want to include Tailwind CSS?",
      default: false,
    },
  ]);

  const targetDir = path.resolve(
    process.cwd(),
    answers.directory,
    answers.projectName
  );
  console.log(chalk.green(`\nCreating project at: ${targetDir}\n`));

  // Create project directory
  fs.mkdirSync(targetDir, { recursive: true });

  // ========================
  // Frontend Setup (Next.js)
  // ========================
  const frontendDir = path.join(targetDir, "frontend");
  fs.mkdirSync(frontendDir, { recursive: true });
  fs.mkdirSync(path.join(frontendDir, "pages"), { recursive: true });
  fs.mkdirSync(path.join(frontendDir, "public"), { recursive: true });
  fs.mkdirSync(path.join(frontendDir, "styles"), { recursive: true });

  // Create frontend/package.json
  let frontendDeps = {
    next: "latest",
    react: "latest",
    "react-dom": "latest",
  };
  const frontendPackageJSON = {
    name: `${answers.projectName}-frontend`,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: "next dev",
      build: "next build",
      start: "next start",
    },
    dependencies: frontendDeps,
  };
  fs.writeFileSync(
    path.join(frontendDir, "package.json"),
    JSON.stringify(frontendPackageJSON, null, 2)
  );

  // Create frontend page file based on language choice
  if (answers.languageVariant === "TypeScript") {
    // Create tsconfig.json
    const tsconfig = {
      compilerOptions: {
        target: "es5",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        skipLibCheck: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        noEmit: true,
        esModuleInterop: true,
        module: "esnext",
        moduleResolution: "node",
        resolveJsonModule: true,
        isolatedModules: true,
        jsx: "preserve",
      },
      include: ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
      exclude: ["node_modules"],
    };
    fs.writeFileSync(
      path.join(frontendDir, "tsconfig.json"),
      JSON.stringify(tsconfig, null, 2)
    );
    // Create a dummy next-env.d.ts file
    fs.writeFileSync(
      path.join(frontendDir, "next-env.d.ts"),
      '/// <reference types="next" />\n/// <reference types="next/types/global" />\n'
    );
    // Create pages/index.tsx
    const indexTSX = `export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to ${answers.projectName} Frontend (TypeScript)</h1>
      <p>This is a Next.js based frontend.</p>
    </div>
  );
}
`;
    fs.writeFileSync(path.join(frontendDir, "pages", "index.tsx"), indexTSX);
  } else {
    // Create pages/index.js
    const indexJS = `export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to ${answers.projectName} Frontend (JavaScript)</h1>
      <p>This is a Next.js based frontend.</p>
    </div>
  );
}
`;
    fs.writeFileSync(path.join(frontendDir, "pages", "index.js"), indexJS);
  }

  // Create next.config.js
  const nextConfig = `module.exports = {
    reactStrictMode: true,
  };
  `;
  fs.writeFileSync(path.join(frontendDir, "next.config.js"), nextConfig);

  // Tailwind CSS Setup (if selected)
  if (answers.useTailwind) {
    // Create a globals.css file with Tailwind directives
    const globalsCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;
`;
    fs.writeFileSync(
      path.join(frontendDir, "styles", "globals.css"),
      globalsCSS
    );

    // Create tailwind.config.js
    const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`;
    fs.writeFileSync(
      path.join(frontendDir, "tailwind.config.js"),
      tailwindConfig
    );

    // Create postcss.config.js
    const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`;
    fs.writeFileSync(
      path.join(frontendDir, "postcss.config.js"),
      postcssConfig
    );

    console.log(chalk.yellow("Note: To install Tailwind CSS, run:"));
    console.log(
      chalk.yellow("npm install -D tailwindcss postcss autoprefixer")
    );
  }

  // Create frontend README.md
  const frontendReadme = `# ${answers.projectName} Frontend

This is the Next.js frontend for ${answers.projectName}.

## Getting Started

1. Navigate to this directory:
   \`\`\`
   cd ${path.join(answers.projectName, "frontend")}
   \`\`\`
2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`
3. Run in development mode:
   \`\`\`
   npm run dev
   \`\`\`

${
  answers.useTailwind
    ? "4. If you haven't already, install Tailwind CSS dependencies as noted above."
    : ""
}
`;
  fs.writeFileSync(path.join(frontendDir, "README.md"), frontendReadme);

  // ========================
  // Backend Setup (Golang)
  // ========================
  const backendDir = path.join(targetDir, "backend");
  fs.mkdirSync(backendDir, { recursive: true });

  // Create backend/go.mod
  const goMod = `module ${answers.projectName}-backend

go 1.16
`;
  fs.writeFileSync(path.join(backendDir, "go.mod"), goMod);

  // Create backend/main.go
  const mainGo = `package main

import (
    "fmt"
    "log"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from ${answers.projectName} Backend!")
}

func main() {
    http.HandleFunc("/", helloHandler)
    fmt.Println("Starting backend server on port 8080...")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        log.Fatal(err)
    }
}
`;
  fs.writeFileSync(path.join(backendDir, "main.go"), mainGo);

  // Create backend README.md
  const backendReadme = `# ${answers.projectName} Backend

This is the Golang backend for ${answers.projectName}.

## Getting Started

1. Navigate to this directory:
   \`\`\`
   cd ${path.join(answers.projectName, "backend")}
   \`\`\`
2. Initialize your Go module:
   \`\`\`
   go mod tidy
   \`\`\`
3. Run the server:
   \`\`\`
   go run main.go
   \`\`\`

The server will run on port 8080.
`;
  fs.writeFileSync(path.join(backendDir, "README.md"), backendReadme);

  console.log(chalk.green("\nProject setup completed successfully!"));
  console.log(chalk.yellow("\nNext Steps:"));
  console.log(
    chalk.yellow(
      `1. Frontend: Navigate to ${path.join(
        answers.projectName,
        "frontend"
      )}, run 'npm install', then 'npm run dev'.`
    )
  );
  console.log(
    chalk.yellow(
      `2. Backend: Navigate to ${path.join(
        answers.projectName,
        "backend"
      )}, run 'go mod tidy', then 'go run main.go'.`
    )
  );
})();
