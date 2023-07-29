const RequestBlood = require("../models/requestBlood.models")

module.exports.createRequestBloodService = async(data) => {
    const result = await RequestBlood.create(data)
    return result;
}