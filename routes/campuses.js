// final_project_server/routes/campuses.js
const router = require("express").Router();
const { Campus, Student } = require("../db");

// GET all campuses
router.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (err) {
    next(err);
  }
});

// GET single campus (including its students)
router.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      include: Student,
    });

    if (!campus) {
      return res.status(404).send("Campus not found");
    }

    res.json(campus);
  } catch (err) {
    next(err);
  }
});

// POST new campus
router.post("/", async (req, res, next) => {
  try {
    const { name, address, description, imageUrl } = req.body;

    const campus = await Campus.create({
      name,
      address,
      description,
      imageUrl,
    });

    res.status(201).json(campus);
  } catch (err) {
    next(err);
  }
});

// PUT (edit) campus
router.put("/:id", async (req, res, next) => {
  try {
    const campusId = req.params.id;

    const campus = await Campus.findByPk(campusId);
    if (!campus) return res.status(404).send("Campus not found");

    await campus.update(req.body);

    const updated = await Campus.findByPk(campusId, { include: Student });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});


// DELETE campus
router.delete("/:id", async (req, res, next) => {
  try {
    const campusId = req.params.id;

    const campus = await Campus.findByPk(campusId);
    if (!campus) return res.status(404).send("Campus not found");

    // prevent FK issues: un-enroll students first
    await Student.update({ campusId: null }, { where: { campusId } });

    await campus.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
