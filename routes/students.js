const router = require("express").Router();
const { Student, Campus } = require("../db");

// GET all students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: Campus,
    });
    res.json(students);
  } catch (err) {
    next(err);
  }
});

// GET single student
router.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      include: Campus,
    });
    res.json(student);
  } catch (err) {
    next(err);
  }
});

// POST create student
router.post("/", async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (err) {
    next(err);
  }
});



// DELETE student
router.delete("/:id", async (req, res, next) => {
  try {
    const deletedCount = await Student.destroy({ where: { id: req.params.id } });
    if (!deletedCount) return res.sendStatus(404);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});


// PUT update student (return with campus)
router.put("/:id", async (req, res, next) => {
  try {
    const studentId = req.params.id;

    const student = await Student.findByPk(studentId);
    if (!student) return res.sendStatus(404);

    await student.update(req.body);

    const updated = await Student.findByPk(studentId, { include: Campus });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});


module.exports = router;
