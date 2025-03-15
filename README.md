## Powered By CodeEaseX 🚀

---

### ⬇️ Installation

```sh
npx https://github.com/Hrithik450/mern-launcher
```

### 🚀 Introduction

mern-launcher automates setting up frontend and backend folders, installing dependencies, and initializing servers, making development faster and hassle-free.

---

### 🛠 Features

- ✅ Automatic Folder Setup.
- ✅ Installs Dependencies Automatically.
- ✅ Fast and Efficient Setup.
- ✅ Built-in Routing System.
- ✅ Built-in Tailwind CSS Configuration.
- ✅ Built-in Redux Toolkit with Store and Slices.
- ✅ Supports React.js, Node.js, Express.js, Tailwind CSS, MongoDB.

📜 **License**: MIT License

---

This project is licensed under the MIT License.

### 🎯 Usage

To create a new project, run:

```sh
npx https://github.com/Hrithik450/mern-launcher
```

You will be prompted with:

- You can enter '.' for current dir, '..' to go back one level, or a full path for a custom location
- Enter the directory: ..
- Enter project name: Demo

This will generate:

```sh
Demo/
├── frontend/ (React.js setup)
└── backend/ (Express/Node.js setup)
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
React
```

### 🛠 Select a Variant

```sh
JavaScript
```

---

### 📂 Project Structure

### **Frontend Folder Structure**

```sh
frontend/
│── public/
│── src/
│ ├── assets/
│ ├── components/
│ │ ├── common/
│ │ ├── layout/
│ │ ├── home/
│ ├── features/
│ │ ├── authSlice.jsx
│ ├── hooks/
│ ├── pages/
│ │ ├── Home.jsx
│ ├── routes/
│ │ ├── PrivateRoute.jsx
│ │ ├── AppRoute.jsx
│ │ ├── AdminRoute.jsx
│ │ ├── index.jsx
│ ├── store/
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
│ ├── App.css
│ ├── index.css
│── .env
│── package.json
│── README.md
```

### **Backend Folder Structure**

```sh
backend/
│── src/
│ ├── config/
│ │ ├── db.js
│ │ ├── config.env
│ ├── controllers/
│ │ ├── authController.js
│ ├── middlewares/
│ │ ├── authMiddleware.js
│ │ ├── errorHandler.js
│ ├── models/
│ │ ├── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ ├── utils/
│ │ ├── generateToken.js
│ │ ├── catchAsync.js
│ ├── index.js
│── .env
│── package.json
│── README.md
```

---

### 🚀 Start the Servers

- Before starting the server, configure the `.env` file.

### Start the Frontend:

```sh
cd Demo/frontend
npm run dev
```

### Start the Backend:

```sh
cd Demo/backend
npm run dev
```

✅ **Basic MERN platform setup completed successfully!**
