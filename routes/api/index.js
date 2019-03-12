const router = require("express").Router();
const projectsRoutes = require("./projects");
const projectEntryRoutes = require("./projectentry");
const reportRoutes = require("./report");
const usersRoutes = require("./users");

// Project routes
router.use("/projects", projectsRoutes);
router.use("/projectentry", projectEntryRoutes);
router.use("/report", reportRoutes);
router.use("/users", usersRoutes);

module.exports = router;
