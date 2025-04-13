const { StatusCodes } = require("http-status-codes");

const getAllJobs = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "ALL Jobs" });
};

const getSingleJob = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "Single Job" });
};

const createJob = async (req, res) => {
  return res.status(StatusCodes.CREATED).json({ msg: "Job Created" });
};

const UpdateJob = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "Job Updated" });
};

const deleteJob = async (req, res) => {
  return res.status(StatusCodes.OK).json({ msg: "Job deleted" });
};

module.exports = { getAllJobs, getSingleJob, createJob, UpdateJob, deleteJob };
