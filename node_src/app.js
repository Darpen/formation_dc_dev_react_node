
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

  let {db_client, db_connection} = await connect()
  
  db_connection.collection('todo').find({}).toArray((err, result) => {
    if(err) return console.log(err)

    console.log('todo :', result)

    db_client.close()
    res.send(result)
   
  })
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

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Send all required fields' });
    }
    const { password: hash, id } = await db('users').select('password', 'id').where('email', email).first();
    if (!hash || !bcrypt.compareSync(password, hash)) {
      return res.status(403).json({ message: 'Could not authenticate.' });
    }
    req.session.userId = id;
    console.log('ok');
    return res.status(200).json({ email, id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
});

app.listen(config.port, function () {
  console.log(`Example app listening on port ${config.port} !`)
})

