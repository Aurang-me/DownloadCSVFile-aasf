require('dotenv').config;
const express = require("express");
const { router } = require("./Routes/indexRouter");
const { sequelize } = require("./Database/dbConnection");
const port =  3000;
// const {Parser} = require("json2csv");
// const fs = require("fs");
const app = express();
// const json2csvParser = new Parser();
app.listen(port,()=>{
    console.log(`app is listening at port ${port}`);
});
var information = [
    {
    "Country": "Nigeria",
    "Population": "200m",
    "Continent": "Africa",
    "Official Language": "English"
    },
    {
    "Country": "India",
    "Population": "1b",
    "Continent": "Asia",
    "Official Language": "Hindi, English"
    },
    {
    "Country":"United States of America",
    "Population": "328m",
    "Continent": "North America",
    "Official Language": "English"
    },
    {
    "Country": "United Kingdom",
    "Population": "66m",
    "Continent": "Europe",
    "Official Language": "English"
    }
];


// const parsedData = json2csvParser.parse(information);
// console.log(parsedData);
// fs.writeFile("data.xlsx",parsedData,(err)=>{
// if(err){
//     throw err;
// }
// console.log("file saved")
// })

// app.get('/get-csv',(req,res)=>{
//     res.attachment("data.xlsx");
//     res.status(200).send(parsedData);

// });
// app.use(express.json());
app.use('/', router);
// try {
//     sequelize.authenticate();
//     console.log("database connection esteblished successfully");
// } catch (error) {
//     console.log("An error occured while connecting to database", error);
    
// }