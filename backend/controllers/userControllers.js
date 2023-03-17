const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const { User } = require("../models/userModel");


const generateToken = (id) => {
    return jwt.sign({ id }, "SECRET_CONVERSO", {
        expiresIn: "30d",
    });
}
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please enter all fields")
    }

    const userExists = await User.findOne({ email }).exec()
    console.log("USER EXISTS: ", userExists)

    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const user = await User.create({
        name, password, email, pic
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            pic: user.pic,
        })

    }
    else {
        res.status(400);
        throw new Error("User not found");
    }
})

const authenticateUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    console.log("CREDS: ", email, password)
    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter all fields")
    }

    const user = await User.findOne({ email }).exec()
    const doesPassMatch = await user.matchPassword(password)

    if (user.email && (doesPassMatch)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
})

module.exports = { registerUser, authenticateUser }