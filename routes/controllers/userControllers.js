const app = require("../../app");
const fs = require("fs");

exports.getAlluser = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            message: 'All users retrieved successfully.'
        }
    })
}

exports.createUser = async (req, res) => {
    const data = await req.body;
    res.status(201).json({
        status: 'success',
        data,
    })
}

exports.getUser = async (req, res) => {
    const id = parseInt(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            message: `User ID: ${id}`,
            name: "Arham"
        }
    })
}