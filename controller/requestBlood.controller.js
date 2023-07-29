const { createRequestBloodService } = require("../services/requestBlood.service")

module.exports.createRequestBlood = async(req, res) => {
    try {
        const result = await createRequestBloodService(req.body)

        res.status(200).json({
            status: 'success',
            message: 'Blood request successfully sent',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Blood request cannot sent',
            error: error.message
        })
    }
}