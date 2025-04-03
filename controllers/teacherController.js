
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, auth: req.user, msg: "Welcome To Teacher dashboard." });
}

module.exports = { Dashboard }