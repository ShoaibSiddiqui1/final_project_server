// final_project_server/db/models/student.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Student = sequelize.define("student", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    },
    gpa: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0.0,
        max: 4.0,
      },
    },
  });

  return Student;
};
