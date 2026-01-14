# 🚀 Node CRUD Operation API

This is a simple **Node.js + Express + CRUD API project** where you can perform:

> ✅ Create
> ✅ Read
> ✅ Update
> ✅ Delete

operations using RESTful APIs.

---

## 📌 Features

* Add new data (Create)
* Fetch all data (Read)
* Fetch data by ID
* Update existing data
* Delete data
* MVC folder structure (Model, Controller, Routes)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* Nodemon (for development)

---

## 📁 Project Structure

```
Node-Crud-Operation/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/praveen2001-dev/Node-Crud-Operation.git
```

### 2️⃣ Go to Project Folder

```bash
cd Node-Crud-Operation
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 5️⃣ Start Server

```bash
npm start
```

or (if nodemon installed)

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

## 📮 API Endpoints

### ➤ Create User

**POST** `/api/users`

```json
{
  "name": "Praveen",
  "email": "praveen@gmail.com"
}
```

---

### ➤ Get All Users

**GET** `/api/users`

---

### ➤ Get User By ID

**GET** `/api/users/:id`

---

### ➤ Update User

**PUT** `/api/users/:id`

```json
{
  "name": "Updated Name"
}
```

---

### ➤ Delete User

**DELETE** `/api/users/:id`

---

## 🧪 Testing

You can test APIs using:

* Postman
* Thunder Client (VS Code extension)

---

## 🎯 Learning Purpose

This project is useful for beginners to understand:

* Express Routing
* MVC Architecture

---

## 🔧 Future Improvements

* JWT Authentication
* Input Validation
* Error Handling Middleware
* Swagger API Docs
* Pagination

---

## 👨‍💻 Author

**Praveen Kumar**
GitHub: [https://github.com/praveen2001-dev](https://github.com/praveen2001-dev)

---
