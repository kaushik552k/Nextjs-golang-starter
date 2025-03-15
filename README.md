## Crafted & Powered By Kaushik 🚀

---

### ⬇️ Installation

```sh
npx https://github.com/kaushik552k/Nextjs-golang-starter
```

### 🚀 Introduction

nextjs-golang-starter automates setting up a Next.js frontend (with JavaScript or TypeScript and optional Tailwind CSS) and a Golang backend, installs dependencies, and initializes servers—making development faster and hassle-free.


---

### 🛠 Features

- ✅ Automatic Folder Setup.
- ✅ Installs Dependencies Automatically.
- ✅ Fast and Efficient Setup.
- ✅ Supports Next.js with JavaScript or TypeScript.
- ✅ Optional Tailwind CSS Configuration.
- ✅ Minimal Golang Backend Setup.
- ✅ Clear and Prompted Project Initialization.

📜 **License**: MIT License

---

This project is licensed under the MIT License.

### 🎯 Usage

To create a new project, run:

```sh
npx https://github.com/kaushik552k/Nextjs-golang-starter
```

You will be prompted with:

- You can enter . for current dir, .. to go back one level, or a full path for a custom location.
- Enter the directory: (e.g., ..)
- Enter project name: (e.g., Demo)
- Choose frontend language: (JavaScript or TypeScript)
- Do you want to include Tailwind CSS? (Yes/No)


This will generate:

```sh
Demo/
├── frontend/  (Next.js project)
└── backend/   (Golang project)
```

### 📦 Module Type Selection

```sh
Which module type do you prefer? (Enter 'cjs' for CommonJS or 'esm' for ES Module):
```

```sh
esm
```

### 🎨 Select a Framework

```sh
Next.js
```

### 🛠 Select a Variant

```sh
JavaScript or TypeScript (depending on your choice)
```

### 🛠 Tailwind CSS option
```sh
Do you want to include Tailwind CSS? (Yes/No)
```
---

### 📂 Project Structure

### **Frontend Folder Structure**

```sh
frontend/
│── pages/
│   └── index.(js|tsx)         # Main entry point (TypeScript if selected, else JavaScript)
│── public/                    # Static assets
│── styles/
│   └── globals.css            # Tailwind CSS directives (if enabled)
│── package.json               # Frontend dependencies and scripts
│── next.config.js             # Next.js configuration
│── tsconfig.json              # TypeScript configuration (if selected)
│── next-env.d.ts              # TypeScript definitions (if selected)
│── README.md                  # Frontend documentation
```

### **Backend Folder Structure**

```sh
backend/
│── go.mod                     # Go module file
│── main.go                    # Minimal Golang server setup
│── README.md                  # Backend documentation

```

---

### 🚀 Start the Servers

- Before starting the server, configure the `.env` file.

### Start the Frontend:

```sh
cd Demo/frontend
npm install
npm run dev
```

### Start the Backend:

```sh
cd Demo/backend
go mod tidy
go run main.go
```

**✅ Basic Next.js and Golang platform setup completed successfully!**
