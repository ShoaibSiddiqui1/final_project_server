// final_project_server/db/models/campus.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Campus = sequelize.define("campus", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue:
        "https://img.freepik.com/free-icon/university_318-879283.jpg",
    },
  });

  return Campus;
};
