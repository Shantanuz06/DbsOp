const express = require("express");
const db = require('./models');
const {User} =require('./models')
const app= express();



db.sequelize.sync().then((req) => {
    const app = express();
    app.listen(3000,() =>{
        console.log('Server is running on port 3000');
     });
});


app.get("/home", (req,res)=>{
    res.send({message:"Welcome to the API"});
});

app.get("/select", (req, res) => { 
    User.findAll().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        console.log(err);
    });
    
});

app.get("/insert", (req, res) => { 
    User.create({
        firstName:"John",
        lastName: "Doe",
        age:"25",
        emailId: 'john@gmail.com'
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    });
    res.send('/insert');
});




