const express = require("express");
const db = require('./models');
const {User} =require('./models')
const app= express();
const PORT =  process.env.PORT || 3001;


app.get('/', (req,res)=>{
    res.send({message:"Welcome to the API"});
});

app.get('/select', (req, res) => { 
    User.findAll().then((users)=>{
        res.send(users);
    }).catch((err)=>{
        console.log(err);
    });
    
});

app.get('/insert', (req, res) => { 
    User.create({
        firstName:"John",
        lastName: "Doe",
        age:"25",
        email: 'john@gmail.com'
    }).catch((err)=>{
        if(err){
            console.log(err);
        }
    });
    res.send('Inserting Data, Refresh Database');
});

db.sequelize.sync().then((req) => {
    app.listen(PORT,() =>{
        console.log('Server is running on port ',PORT);
     });
});


