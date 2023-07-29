const mongoose = require("mongoose")

const donnerSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please provide a name."],
        trim : true,
        unique : [true, "Name must be unique"],
        minLength : [3, "Name must be at least 3 character."],
        maxLength : [100, "Name is true large"]
      },
      gender: {
        type: String,
        required: true
      },
      group : {
        type : String,
        required : true,
        enum : {
          values : ["O+", "O-", "B+", "B-", "AB+", "AB-"],
          message : "Group value can't be {VALUE}, must be O+/O-/B+/B-/AB+/AB-"
        }
      },
      date: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: Number,
        required: true
      },
      division: {
        type: String,
        required: true
      },
      zila: {
        type: String,
        required: true
      },
      upazila: {
        type: String,
        required: true
      },
      village: {
        type: String,
        required: true
      }
})

const Donner = mongoose.model("Donner", donnerSchema);
module.exports = Donner;