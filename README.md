Final Project – Campus Management System (PERN Stack)

Student: Shoaib Siddiqui
Course: Full-Stack CRUD Application
Project: Campus Management System

This project consists of two separate repositories that must be run together:

Server (Backend) – Node.js, Express, Sequelize, PostgreSQL

Client (Frontend) – React, Redux

The client communicates with the server through REST API calls.

Repository Links

Server (Backend):
https://github.com/shoaibsiddiqui1/final_project_server

Client (Frontend):
https://github.com/shoaibsiddiqui1/client-starter-code

Requirements (Before You Start)

Node.js (v18 or v20 recommended)

PostgreSQL installed and running locally

Two terminal windows (one for server, one for client)

HOW TO RUN THE APPLICATION (STEP-BY-STEP)
PART 1 — Run the Server (Backend)
1. Clone the server repository
git clone https://github.com/shoaibsiddiqui1/final_project_server
cd final_project_server

2. Create the PostgreSQL database

Create a database named:

final_project


Example command:

createdb final_project

3. Create environment variables

Copy the example file:

cp .env.example .env


Open .env and set your PostgreSQL credentials:

PG_USER=postgres
PG_PASSWORD=your_postgres_password

4. Install server dependencies
npm install

5. Seed the database
node seed.js


Expected output:

Database synced!
Seeding successful!

6. Start the server
node index.js


Expected output:

Server running on port 3001


✅ The backend API is now running at:
http://localhost:3001

⚠️ Leave this terminal running

PART 2 — Run the Client (Frontend)
1. Open a NEW terminal window
2. Clone the client repository
git clone https://github.com/shoaibsiddiqui1/client-starter-code
cd client-starter-code

3. Install client dependencies
npm install

4. Start the client
npm start


The application will automatically open in the browser at:

👉 http://localhost:3000

IMPORTANT NOTES

The server must be running first before starting the client.

The client fetches data from the server at http://localhost:3001.

.env files are not committed to GitHub and must be created locally.

ESLint warnings do not affect functionality.

If the Client Shows an “allowedHosts” Error

On some machines, React may fail to start with an error like:

options.allowedHosts[0] should be a non-empty string

Fix:

Create a file named .env in the client repository root and add:

HOST=localhost
DANGEROUSLY_DISABLE_HOST_CHECK=true


Then restart:

npm start


(Do not commit this .env file.)

Features Implemented

Full CRUD operations for Campuses and Students

PostgreSQL database with Sequelize ORM

One-to-many relationship between Campus and Student

RESTful API

React client with navigation between views

All assignment requirements implemented

Summary (Quick Run)

Terminal 1 (Server):

cd final_project_server
npm install
cp .env.example .env
node seed.js
node index.js


Terminal 2 (Client):

cd client-starter-code
npm install
npm start
