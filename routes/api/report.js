const router = require("express").Router();
const reportController = require("../../controllers/reportController");

// Matches with "/api/books"
router.route("/")
  .get(reportController.findAll)
  .post(reportController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(reportController.findById)
  .put(reportController.update)
  .delete(reportController.remove);

module.exports = router;
