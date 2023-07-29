const mongoose = require('mongoose')

const requestBloodModel = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please provide a name."],
        trim : true,
        unique : [true, "Name must be unique"],
        minLength : [3, "Name must be at least 3 character."],
        maxLength : [100, "Name is true large"]
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
      quantity: {
        type: String,
        required: true
      },
      hemoglobin: {
        type: String,
      },
      location: {
        type: String,
        required: true
      },
      phoneNumber: {
        type: Number,
        required: true
      }
})

const RequestBlood = mongoose.model('RequestBlood', requestBloodModel)

module.exports = RequestBlood
