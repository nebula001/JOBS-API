const getAllJobs = async (req, res) => {
  return res.status(200).json({ msg: "ALL Jobs" });
};

const getSingleJob = async (req, res) => {
  return res.status(200).json({ msg: "Single Job" });
};

const createJob = async (req, res) => {
  return res.status(201).json({ msg: "Job Created" });
};

const UpdateJob = async (req, res) => {
  return res.status(201).json({ msg: "Job Updated" });
};

const deleteJob = async (req, res) => {
  return res.status(200).json({ msg: "Job deleted" });
};

module.exports = { getAllJobs, getSingleJob, createJob, UpdateJob, deleteJob };
