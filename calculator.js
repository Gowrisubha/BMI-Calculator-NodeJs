//jshint esversion:6
const express = require("express");
const bodyParser=require('body-parser')

const app=express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile(__dirname +"/bmicalculator.html");
})

app.post("/bmicalculator", function(req, res) {
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var result = weight / (height * height);

    // HTML response with styling
    var styledResponse = `
        <html>
            <head>
                <style>
                    
                    body {
                        font-family: 'Poppins', sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        padding: 20px;
                        margin:auto;
                    }
                    .result {
                        font-size: 24px;
                        color: green;
                    }
                </style>
            </head>
            <body>
                <h1>Your calculated BMI</h1>
                <div class="result">BMI: ${result.toFixed(2)}</div>
            </body>
        </html>
    `;

    res.send(styledResponse);
});


app.listen(3000,function(){
    console.log("Server running in the port 3000");
})