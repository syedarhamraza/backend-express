const app = require("../../app");


exports.getAlluser = async (req, res) =>{
    res.status(200).json({
        status: 'success',
        data: {
            message: 'All users retrieved successfully.'
        }
    })
}

exports.createUser = async (req, res) =>{
    res.status(200).json({
        status: 'success',
        data: {
            message: 'User created successfully.'
        }
    })
}

exports.getUser = async (req, res) =>{
    const id = parseInt(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            message: `User ID: ${id}`,
            name: "Arham"
        }
    })
}