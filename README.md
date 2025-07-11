# 📚 Book Review

A full-stack book review web application built with **Node.js**, **Express**, **MongoDB Atlas**, and **React**. Admin users can add books, and all users can browse, search, and review them.

# Screenshots
![img 2](https://github.com/rachitkum/book_review/blob/main/bookrev1.PNG)

![img 2](https://github.com/rachitkum/book_review/blob/main/bookrev2.PNG)

![img 3](https://github.com/rachitkum/book_review/blob/main/bookrev3.PNG)

## 🔧 Tech Stack

- **Frontend**: React (with Context API, Axios, React Router)
- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Authentication**: JWT-based login/signup

---

## 🚀 Features

- ✅ User signup/login
- ✅ Admin-only "Add Book" form 
- ✅ View all books in a responsive card layout
- ✅ Live search with suggestions
- ✅ Book detail page with reviews
- ✅ Authenticated users can submit reviews with ratings
- ✅ Profile update (username/password)
- ✅ Logout 

---

## 🛠️ Getting Started

### 🔃 Clone the repository

```bash
git clone https://github.com/rachitkum/book_review.git
cd book_review
```

### 🛠️ Backend Setup
  ```bash
  npm install
  ```

### Create .env file

  ```bash
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_super_secret_key
  ```

### start the server
  ```bash
  npm run dev
  ```

### Frontend

  ```bash
  cd frontend/book-ui
  npm install
  npm start
  ```

