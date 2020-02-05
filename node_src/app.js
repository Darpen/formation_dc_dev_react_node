
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

  //DELETE element non necessaire dans la bdd
  let todo = req.body
  delete todo.step;

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

app.post('/register', async(req, res) => {
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

app.post('/login', async(req, res) => {
  let {db_client, db_connection} = await connect();

  console.log('login post ', req.body);

  let user = req.body;
  db_connection.collection('user').find({}).toArray((err, result) => {
    if(err) return console.log(err)
    
    //boucle sur le tableau des users dans node
    result.forEach(db_user => {
      if(user.email === db_user.email && user.password === db_user.password){
        console.log('Existe dans la bdd')
        res.send(result);
      }
      else{
        console.log("N'existe pas dans la bdd")
      }
    });

    db_client.close();
  })
  

});

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

