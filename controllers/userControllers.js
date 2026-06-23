const app = require("../app");
const fs = require("fs");
const User = require("../models/userModel");

exports.getAlluser = async (req, res) => {
    const Users = await User.find();
    res.status(200).json({
        status: 'success',
        data: {
            Users,
        }
    })
}

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        const {name, email} = newUser;
        res.status(201).json({
            status: 'success',
            data: {
                name,
                email,
            }
        })
        console.log("User Created:",newUser);
    }catch(err){
        res.status(500).json({
            status: 'error',
            error: err.message
        })
        console.log("Error: ", err.message);
    }
}

exports.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            user,
        }
    })
}