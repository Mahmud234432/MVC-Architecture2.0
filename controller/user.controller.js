const path = require('path')
const users = require('../model/user.model')

exports.getUser = (req, res) => {
    res.sendFile(path.join(__dirname + '/../view/index.html'));
}

exports.saveUser = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);

    const user = {
        name,
        age
    };
    users.push(user);
    res.status(200).json({
        succes: true,
        users
    })};