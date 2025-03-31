
const Dashboard = (req, res) => {
    res.status(200).json({ status: true, msg: "Welcome To Teacher dashboard." });
}

module.exports = { Dashboard }