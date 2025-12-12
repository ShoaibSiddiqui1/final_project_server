// final_project_server/db/index.js
const { Sequelize } = require("sequelize");

// 👇 change DB name only if your DB is different
const db = new Sequelize("postgres://localhost:5432/final_project", {
  logging: false,
});

// Import model definitions
const Campus = require("./models/campus")(db);
const Student = require("./models/student")(db);

// Associations
Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = { db, Campus, Student };
