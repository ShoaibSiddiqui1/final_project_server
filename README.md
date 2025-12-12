# Final Project Server – Campus Management System (PERN)

## Overview
This repository contains the **server-side (back-end)** of the Campus Management System built for the Full-Stack CRUD Application final project.  
It uses **Node.js, Express, PostgreSQL, and Sequelize** to provide a RESTful API for managing campuses and students.

This server works together with the client-side React/Redux application.

---

## Technology Stack
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM

---

## Database Models

### Campus
- name (STRING, required)
- address (STRING, required)
- description (TEXT, optional)
- imageUrl (STRING, optional, default provided)

### Student
- firstName (STRING, required)
- lastName (STRING, required)
- email (STRING, required)
- imageUrl (STRING, optional, default provided)
- gpa (FLOAT, 0.0–4.0, optional)

### Associations
- A Campus **has many** Students
- A Student **belongs to** at most one Campus

---

## API Routes

### Campuses
- `GET /api/campuses` – get all campuses
- `GET /api/campuses/:id` – get a single campus (with students)
- `POST /api/campuses` – create a new campus
- `PUT /api/campuses/:id` – edit a campus
- `DELETE /api/campuses/:id` – delete a campus (students are unassigned)

### Students
- `GET /api/students` – get all students
- `GET /api/students/:id` – get a single student (with campus)
- `POST /api/students` – create a new student
- `PUT /api/students/:id` – edit a student
- `DELETE /api/students/:id` – delete a student

---

## Setup Instructions

### 1. Create the Database
Make sure PostgreSQL is running, then create the database:
```bash
createdb final_project

2. Install Dependencies
npm install

3. Seed the Database
node seed.js

4. Start the Server
node index.js


The server will run at:

http://localhost:3001

Notes

This server is designed to be used with the client-side React/Redux application.

All CRUD operations are fully implemented.

Sequelize manages database relationships and queries.

Author

Shoaib Siddiqui

Full-Stack CRUD Application — Final Project


---

# PART B — **Push `final_project_server` to GitHub**

### 1️⃣ Create a NEW GitHub repo
On GitHub:
- Repo name: **final_project_server**
- Public
- **DO NOT** initialize with README

---

### 2️⃣ Push from terminal

```bash
cd ~/final_project/final_project_server

git init
git add .
git commit -m "Initial server commit"

git branch -M main
git remote add origin https://github.com/shoaibsiddiqui1/final_project_server.git
git push -u origin main
