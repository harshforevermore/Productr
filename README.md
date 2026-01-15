# Productr 🛒

Productr is a full-stack web application that allows users to manage products with features like OTP-based authentication, product creation, publishing, and management.

This repository contains both **backend (Node.js + Express + MongoDB)** and **frontend (React + Tailwind CSS)** parts.

---

## 🚀 Features

### 🔐 Authentication
- OTP-based login (Email)
- No passwords required
- Secure user verification

### 📦 Product Management
- Add, update, delete products
- Publish / unpublish products
- Product categories:
  - Foods
  - Electronics
  - Clothes
  - Beauty Products
  - Others
- Exchange eligibility support
- Image names stored as metadata (no file uploads)

### 🎨 Frontend
- React with Context API
- Tailwind CSS for styling
- Modal-based product creation
- Toast notifications using `react-hot-toast`

### ⚙️ Backend
- Express (ES Modules)
- MongoDB with Mongoose
- Nodemailer (Gmail SMTP)
- Clean MVC architecture

---

## 🗂️ Project Structure

client/
├── src/
│ ├── components/
│ ├── context/
│ ├── pages/
│ ├── api/
│ └── main.jsx
└── package.json
server/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── index.js


---

## 🛠️ Tech Stack

**Frontend**
- React
- Tailwind CSS
- Axios
- react-hot-toast

**Backend**
- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer

---

## 🔑 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/productr
CORS_ORIGIN=http://localhost:5173

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_FROM="Productr <yourgmail@gmail.com>"

---

## 🔑 Running the Project

**Frontentd**
```
cd server
npm install
npm run dev

---


**Backend**
```
cd client
npm install
npm run dev

---