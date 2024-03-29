const express = require("express");
const db = require('./models');
const {User} =require('./models')
const app= express();
const Joi = require('joi');
const PORT =  process.env.PORT || 5000;

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    email: Joi.string().email().required()
});


const validateUserData = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    next();
};

app.use(express.json());



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

app.post('/insert', validateUserData, (req, res) => {
    const { firstName, lastName, age, email } = req.body;
    User.create({ firstName, lastName, age, email })
        .then(() => {
            res.send('Data inserted successfully');
        }).catch((err) => {
            console.log(err);
        });
});

/*
// Insert Data in this format in body
{
    "firstName":"John",
    "lastName":"Doe",
    "age":"25",
    "email": "jonney@gmail.com"
}

*/

app.get('/delete',(req,res) =>{
    User.destroy({where:{id:1}});
    res.send('Deleting a user with id of 1');
});

db.sequelize.sync().then((req) => {
    app.listen(PORT,() =>{
        console.log('Server is running on port ',PORT);
     });
});


