const express = require("express");
const {
  getAllJobs,
  getSingleJob,
  createJob,
  UpdateJob,
  deleteJob,
} = require("../controllers/jobs");

const router = express.Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getSingleJob).patch(UpdateJob).delete(deleteJob);

module.exports = router;
