const express = require('express')
const app = express()
const path = require('path')
const userModel = require('./model/user.model')

const dotenv = require('dotenv')
dotenv.config()
const connectToDB = require('./config/db')
connectToDB()

app.use(express.static(path.join(__dirname,"public")))

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())


// app.get('/register', (req,res) => {
//     res.render('register')
// })
// user create
app.post('/create', async (req,res) => {
    const {username, email , password} = req.body;
    const newUser = await userModel.create({
        username,
        email,
        password
    })
    res.send(newUser);
})
// findOne
app.post('/read',  async (req,res) => {
    userFind = await userModel.findOne({email: "divya@gmail.com"})
    res.send(userFind);
})
// fineAll

app.post('/readAll',  async (req,res) => {
    userFind = await userModel.find()
    res.send(userFind);
})

// findOneAndUpdate

app.post('/update', async (req,res) => {
   const updatedUser = await userModel.findOneAndUpdate({username: "divya"},{email: "shreya@gmail.com"})
    res.send(updatedUser);
})

// findOneAndDelete
app.post('/delete', async (req,res) => {
    const deleteUser = await userModel.findOneAndDelete({username:"himanshu"})
    res.send(deleteUser);
})



module.exports = app;

