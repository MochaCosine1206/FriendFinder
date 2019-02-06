const fs = require('fs');
const apiRoutes = require('express').Router();

let friends = [];

apiRoutes.get("/api/friends", function (req, res) {
    return res.json(friends);
})

apiRoutes.post("/api/friends", function (req, res) {
    let newFriend = req.body;
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
})



module.exports = apiRoutes;