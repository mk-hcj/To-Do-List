const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "ejs");

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

const https = require('https');

app.use(express.static('public'))

let itemsArr =['hi'];

app.get('/', (req, res)=>{
    app.use(express.static('public'))

    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let todayDate = new Date();
    let todayDay = todayDate.getDay();
    
    let weekCheck = weekdayCheck(todayDay);
    
    let marker = week[todayDay];
    console.log(todayDay+" "+todayDate);

    res.render("toDoList", {
        dayOfWeek: marker,
        weekLogger: weekCheck,
        addedItem: itemsArr,
    });
});


app.post('/', (req, res)=>{

    let item = req.body.newItem;
    itemsArr.push(item);


    res.redirect("/");
    console.log(itemsArr);
});


app.listen(port, ()=>{
    console.log(`Server has been activated at port ${port}.`);
})


function weekdayCheck(day) {
    if(day === 0 || day === 6){
        return 'weekend';
    } else {
        return 'weekday';
    };
};