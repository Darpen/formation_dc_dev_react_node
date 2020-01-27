
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
/* GET ALL*/
app.get('/todo', async (req, res) => {
  let result = await queries.find('todo', {})
  res.json(result)
})

/* GET une TODO*/
app.get('todolist/todo/id', async (req, res) => {

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('todo').findOne({_id:id}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('todolistid :', result)

    db_client.close()
    res.send(result)
   
  })
})

app.post('/todo', async(req, res) => {
  let {db_client, db_connection} = await connect()

  console.log(req.body);

  //DELETE element non necessaire dans la bdd
  let todo = req.body
  delete todo.step;
  res.send(result)
})

/* ------USER----- */
app.get('/user', async (req, res) => {

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('user').find({}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('user :', result)

    db_client.close()
    res.send(result)
   
  })
})

app.post('/user', async(req, res) => {
  let {db_client, db_connection} = await connect()

  console.log(req.body);

  /* DELETE les elements non necessaires dans la base de données */
  let user = req.body;
  delete user.repeatPassword;
  delete user.errors;
  delete user.redirectAfterRegister;

  db_connection.collection('user').insertOne(user, function(err, response){
    if(err) throw err;

    console.log("document inserted")
    db_client.close()
    res.send('ok');
  })
})

//===============================CORRECTION=======================================

 
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

