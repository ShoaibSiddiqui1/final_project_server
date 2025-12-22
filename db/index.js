// final_project_server/db/index.js
require("dotenv").config();
const { Sequelize } = require("sequelize");

// Prefer DATABASE_URL if provided, otherwise use local env vars
const databaseUrl =
  process.env.DATABASE_URL ||
  `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST || "localhost"}:${process.env.PG_PORT || 5432}/${process.env.PG_DATABASE || "final_project"}`;

const db = new Sequelize(databaseUrl, { logging: false });

// Import model definitions
const Campus = require("./models/campus")(db);
const Student = require("./models/student")(db);

// Associations (make the FK name predictable)
Campus.hasMany(Student, { foreignKey: "campusId" });
Student.belongsTo(Campus, { foreignKey: "campusId" });

module.exports = { db, Campus, Student };
