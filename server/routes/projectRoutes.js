const express = require("express");

const Project = require("../models/Project");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {

  try {

    const project = new Project({
      ...req.body,
      createdBy: req.user.id
    });

    await project.save();

    res.json(project);

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", auth, async (req, res) => {

  try {

    const projects = await Project.find({
      createdBy: req.user.id
    });

    res.json(projects);

  } catch (err) {
    res.status(500).json(err);
  }
});
router.post(
  "/:id/tasks",
  auth,
  async (req, res) => {

    try {

      const project =
        await Project.findById(req.params.id);

      project.tasks.push(req.body);

      await project.save();

      res.json(project);

    } catch (err) {

      res.status(500).json(err);
    }
  }
);
router.put(
  "/:projectId/tasks/:taskIndex",
  auth,
  async (req, res) => {

    try {

      const project =
        await Project.findById(
          req.params.projectId
        );

      project.tasks[
        req.params.taskIndex
      ].status = req.body.status;

      await project.save();

      res.json(project);

    } catch (err) {

      res.status(500).json(err);
    }
  }
);
router.delete(
  "/:id",
  auth,
  async (req, res) => {

    try {

      await Project.findByIdAndDelete(
        req.params.id
      );

      res.json("Project Deleted");

    } catch (err) {

      res.status(500).json(err);
    }
  }
);
module.exports = router;