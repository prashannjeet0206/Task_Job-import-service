const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    publishDate: {
      type: Date,
    },
    description: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobs", jobSchema);
