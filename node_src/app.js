
const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

let connect = require("./connection.js")
let config = require("./config.js")

/* SESSION COOKIES */
var cookieSession = require('cookie-session')

app.use(cookieSession({
  name: 'session',
  keys: ['code'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

/* ----------------GET AND POST REQUEST----------------- */
app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

/* ------TODO----- */
/* 
GET ALL
*/
app.get('/todo', async (req, res) => {
  let result = await queries.find('todo', {})
  res.json(result)
})

/* 
GET TODO BY ID 
*/
app.get('todolist/todo/id', async (req, res) => {

  console.log(req.params)
  let id = req.params.id
  let result = await queries.findOne('todo', {"_id": ObjectID(id)})
  res.json(result)
})

/* 
POST TODO 
*/
app.post('/todo', async (req, res) => {
  let result = await queries.insertOne('todo', req.body);
  //DELETE element non necessaire dans la bdd
  let todo = req.body
  delete todo.step;
  //envoi
  res.send(result)
})

/* ------USER----- */
/* 
GET ALL
 */
app.get('/user', async (req, res) => {
  let result = await queries.find('user', {})
  res.json(result)
})

/* 
POST USER
*/
app.post('/user', async(req, res) => {
  let result = await queries.insertOne('user', req.body);

  /* DELETE les elements non necessaires dans la base de données */
  let user = req.body;
  delete user.repeatPassword;
  delete user.errors;
  delete user.redirectAfterRegister;

  //envoi
  res.send(result)
})

/* 
SIGNUP
*/
app.post('/signup', async (req, res, next) => {
 
  try {
   
    let user = req.body
    console.log("user", user)
   
    let existingUser = await queries.findOne('user', {mail: user.mail})
   
    if(existingUser !== null) {
      next("Ce compte existe déjà")
    } else {
     
      let insert = await queries.insertOne('user', user)
     
      res.json(insert)
    }
   
  } catch(err) {
    next(err)
  }
})
 
/* 
LOGIN
*/
app.post('/login', async (req, res, next) => {
 
  try {
   
    let user = req.body
    console.log("user", user)
   
    let existingUser = await queries.findOne('user', {mail: user.mail})
   
    if(existingUser !== null && existingUser.password === user.password) {
      req.session.user = {mail: existingUser.mail, _id: existingUser._id}
      let userToReturn = {
        _id: existingUser._id,
        mail: existingUser.mail,
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
      }
      res.send(userToReturn)
    } else {
      next("Invalid credentials")
    }
   
  } catch(err) {
    next(err)
  }
})

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

