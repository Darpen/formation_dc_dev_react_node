
const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser');

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

/* GET AND POST REQUEST */
app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World!')
})

/* ------TODO----- */
app.get('/todo', async (req, res) => {

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('todo').find({}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('todo :', result)

    db_client.close()
    res.send(result)
   
  })
})

app.post('/todo', async(req, res) => {
  let {db_client, db_connection} = await connect()

  console.log(req.body);

  db_connection.collection('todo').insertOne(req.body, function(err, response){
    if(err) throw err;

    console.log("document inserted")
    db_client.close()
    res.send('ok');
  })
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

  /* DELETe les elements non necessaires dans la base de données */
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

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

