
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Student dashboard." });
}

module.exports = { Dashboard }