const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Company name must be provided"],
      maxLength: 50,
    },

    position: {
      type: String,
      required: [true, "Position must be provided"],
      maxLength: 50,
    },

    status: {
      type: String,
      enum: ["Pending", "Interview", "Applied"],
      default: "Pending",
    },

    createdBy: {
      userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User Id must be provided"],
      },
      userName: {
        type: String,
        required: [true, "User Name must be provided"],
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);
