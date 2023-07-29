const Donner = require("../models/donner.models")

module.exports.createDonnerService = async(data) => {
    const result = await Donner.create(data)
    return result  
}