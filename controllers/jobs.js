const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");
const { BadRequest, NotFound } = require("../errors");

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({
    "createdBy.userId": req.user.userId,
    "createdBy.userName": req.user.userName,
  });
  return res.status(StatusCodes.OK).json({ jobs, nbHits: jobs.length });
};

const getSingleJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId, userName } = req.user;

  const singleJob = await Job.findOne({
    _id: jobId,
    "createdBy.userId": userId,
    "createdBy.userName": userName,
  });
  if (!singleJob) {
    throw new NotFound(`No job with given job id ${jobId} found`);
  }
  return res.status(StatusCodes.OK).json({ singleJob });
};

const createJob = async (req, res) => {
  if (!req.body) {
    throw new BadRequest("Body cannot be empty");
  }
  req.body.createdBy = { userId: req.user.userId, userName: req.user.userName };
  const job = await Job.create(req.body);
  return res.status(StatusCodes.CREATED).json({ job });
};

const UpdateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId, userName } = req.user;
  const { company, position } = req.body || {};
  if (!company || !position) {
    throw new BadRequest("Company name and Position must be provided");
  }

  const updatedJob = await Job.findOneAndUpdate(
    {
      _id: jobId,
      "createdBy.userId": userId,
      "createdBy.userName": userName,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!updatedJob) {
    throw new NotFound(`No job with given job id ${jobId} found`);
  }
  return res.status(StatusCodes.OK).json({ updatedJob });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { userId, userName } = req.user;

  const delJob = await Job.findOneAndDelete({
    _id: jobId,
    "createdBy.userId": userId,
    "createdBy.userName": userName,
  });
  if (!delJob) {
    throw new NotFound(`No job with given job id ${jobId} found`);
  }
  return res.status(StatusCodes.OK).json({ delJob });
};

module.exports = { getAllJobs, getSingleJob, createJob, UpdateJob, deleteJob };
