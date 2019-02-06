const express = require('express');
const apiRoutes = require('./routing/apiRoutes');
const htmlRoutes = require('./routing/htmlRoutes');



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRoutes);
app.use('/', apiRoutes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})


