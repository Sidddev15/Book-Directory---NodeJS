const express = require ('express');
const app = express ();
const port = 3000;

//using routes
app.use ('/', require('./Routes/index'));

//setting view engine
app.set('view engine', 'ejs');
app.set('views', './Views');


app.listen (port, function(err) {
    if (err) {
        console.log("Error in loading data on port :: ", port)
    }else {
        console.log("Website is Up and Runnning on port:: ", port)
    }
});