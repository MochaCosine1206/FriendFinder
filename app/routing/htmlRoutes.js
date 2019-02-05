const htmlRoutes = require('express').Router();
const path = require('path');

htmlRoutes.get("/", function(req, res){
    console.log(res);
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.status(200).json({message: 'connected to home!'});
});

htmlRoutes.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    // res.status(200).json({message: 'connected to survey!'});
});

module.exports = htmlRoutes;


