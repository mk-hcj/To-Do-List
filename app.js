const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server has been activated at port ${port}.`);
})

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const https = require('https');

let ejs = require('ejs');
let people = ['George', 'Bill', 'Kane'];
let html = ejs.render('<%= people.join(", "); %>', {people: people});



app.get('/', (req, res)=>{
    let todayDate = Date();
    let marker = todayDate.includes("Wed")? 'Today is Wednesday': 'Today is not Wednesday';
    console.log(typeof(todayDate)+todayDate);
    res.send(marker);

});

