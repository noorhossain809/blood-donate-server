const { createDonnerService } = require("../services/donner.service")

module.exports.createDonner = async(req, res) => {
    try {
        const result = await createDonnerService(req.body)
        res.status(200).json({
            status: 'success',
            message: 'Blood donner successfully created.',
            data: result   
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Blood donner cannot created successfully!',
            error: error.message
        })
    }
}