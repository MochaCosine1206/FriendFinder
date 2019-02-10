const htmlRoutes = require('express')
const path = require('path');

module.exports = function(app) {


app.get("/", function(req, res){
    console.log(res);
    res.sendFile(path.join(__dirname, "../public/home.html"));
    // res.status(200).json({message: 'connected to home!'});
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
    // res.status(200).json({message: 'connected to survey!'});
});

}


