const router = require("express").Router();
const projectEntryController = require("../../controllers/projectEntryController");

// Matches with "/api/books"
router.route("/")
  .get(projectEntryController.findAll)
  .post(projectEntryController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(projectEntryController.findById)
  .put(projectEntryController.update)
  .delete(projectEntryController.remove);

module.exports = router;
