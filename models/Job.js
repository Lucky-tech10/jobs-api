const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      trim: true,
      maxlength: [50, "Company name cannot be more than 50 characters"],
    },
    position: {
      type: String,
      required: [true, "Please provide job position"],
      trim: true,
      maxlength: [100, "Job position cannot be more than 100 characters"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now,
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

// JobSchema.pre('save', async function () {
//   // Automatically set the updatedAt field to the current date
//   this.updatedAt = Date.now();
// });

// JobSchema.methods.toJSON = function () {
//   const obj = this.toObject();
//   delete obj.__v; // Exclude the version key
//   return obj;
// };

module.exports = mongoose.model("Job", JobSchema);
