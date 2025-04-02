
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, msg: "Welcome To Student dashboard." });
}

module.exports = { Dashboard }