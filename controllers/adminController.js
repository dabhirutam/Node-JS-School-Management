const authModel = require("../models/authModel");

const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Admin dashboard." });
}

const UpdateProfile = async (req, res) => {
    try {
        await authModel.findByIdAndUpdate(req.user._id, req.body);
        res.status(200).json({ status: true, msg: "Your profile updated successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const ViewTeacher = async (req, res) => {
    try {
        res.status(200).json({ status: true, teachers: await authModel.find({ role: "teacher" }) });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const SingleViewTeacher = async (req, res) => {
    try {
        res.status(200).json({ status: true, teacher: await authModel.findById(req.params._id) });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const UpdateTeacher = async (req, res) => {
    try {
        await authModel.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ status: true, msg: "Your profile updated successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

const DeleteTeacher = async (req, res) => {
    try {
        await authModel.findByIdAndDelete(req.params._id);
        res.status(200).json({ status: true, msg: "Teacher deleted successfully." });
    } catch (error) { return res.status(500).json({ status: false, msg: "Server error." }) };
}

module.exports = { Dashboard, UpdateProfile, ViewTeacher, SingleViewTeacher, UpdateTeacher, DeleteTeacher }