// final_project_server/seed.js
require('dotenv').config();
const { db, Campus, Student } = require("./db");

const seed = async () => {
  try {
    await db.sync({ force: true });
    console.log("Database synced!");

    // --- Campuses ---
    const [hunter, brooklyn, queens] = await Promise.all([
      Campus.create({
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description: "CUNY campus on the Upper East Side of Manhattan.",
      }),
      Campus.create({
        name: "Brooklyn College",
        address: "2900 Bedford Ave, Brooklyn, NY 11210",
        description: "Beautiful campus in Brooklyn with a classic quad.",
      }),
      Campus.create({
        name: "Queens College",
        address: "65-30 Kissena Blvd, Queens, NY 11367",
        description: "Diverse campus located in Flushing, Queens.",
      }),
    ]);

    // --- Students ---
    await Promise.all([
      Student.create({
        firstName: "Shoaib",
        lastName: "Siddiqui",
        email: "shoaib@example.com",
        gpa: 3.8,
        campusId: hunter.id,
      }),
      Student.create({
        firstName: "Alex",
        lastName: "Johnson",
        email: "alex@example.com",
        gpa: 3.2,
        campusId: brooklyn.id,
      }),
      Student.create({
        firstName: "Maria",
        lastName: "Lopez",
        email: "maria@example.com",
        gpa: 3.5,
        campusId: queens.id,
      }),
      Student.create({
        firstName: "Yousuf",
        lastName: "Siddiqui",
        email: "yousuf@example.com",
        gpa: 3.0,
        campusId: hunter.id,
      }),
    ]);

    console.log("Seeding successful!");
  } catch (err) {
    console.error("Error while seeding:", err);
  } finally {
    await db.close();
  }
};

seed();
