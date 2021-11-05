import { MongoClient } from 'mongodb';
import express from 'express';
const app = express();

// Connection URL
const url = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ignqx.mongodb.net/Sandbox?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'Sandbox';

async function main(expressProvidedVariable) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('kittens');

  // the following code examples can be pasted here...
  
  //CREATE
  // const insertResult = await collection.insertMany([{ name: "Timmy" }, { name: "Titus" }, { name: "Fred" }]);
  // console.log('Inserted documents =>', insertResult);


// I'm moving this above 
  const insertResult = await collection.insertOne({name: `${expressProvidedVariable}`});
  console.log('Inserted documents =>', insertResult);

  
  return 'done.';
}

async function main2(expressProvidedVariable) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('kittens');

  // the following code examples can be pasted here...
  // make sure find({name: String})
  const filteredDocs = await collection.find({ name: `${globvar2}` }).toArray();
  console.log('Found documents filtered by { name: `${globvar2}` } =>', filteredDocs);
  console.log(`This is what won't be found yet: ${globvar2}`)

  return 'done.';
}

async function main3(expressProvidedVariable, expressProvidedVariable2) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('kittens');

  // the following code examples can be pasted here...
  // make sure find({name: String})
  const updateResult = await collection.updateOne({ name: `${findVar}` }, { $set: { name: `${setVar}` } });
  console.log('Updated documents =>', updateResult);

  return 'done.';
}



app.get('/')
app.listen(3000)

app.set('view engine', 'pug')
app.use(express.static('public'))

// home page 
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/register', (req, res) => {
  res.render('index');
})

app.get('/login', (req, res) => {
  res.render('login');
}) 

// CREATE 
let globvar = "original value"; 

app.get('/hmm', (req, res) => {
  let stringed = JSON.stringify(req.query);  
  let parsed = JSON.parse(stringed);
  globvar = parsed.fname; 
  console.log(parsed.fname);
  
  // res.render('hmm', { myVar: `I want this to be a new ${stringed}` });
  res.render('hmm', { myVar: `This is the posted: data ${parsed.fname}` });
  console.log(req.query)
  // can I put a MongoDB driver CRUD function here? 
  
  main(globvar)
  .then(console.log)
  .catch(console.error)
  // what if I keep this open, and add mongo driver CRUD function to Express function? 
  .finally(() => client.close());

})

/* READ -> find what is inputted 
 change every particular from CREATE 
 I'm confused. What do I need to put in to get something? the id? 
*/
let globvar2 = "original value2" 

app.get('/ohyeah', (req, res) => {
  let stringed = JSON.stringify(req.query);  
  let parsed = JSON.parse(stringed);
  globvar2 = parsed.fname; 
  console.log(parsed.fname);
  
  res.render('ohyeah', { myVar: `This is the fetched: data ${parsed.fname}` });
  console.log(req.query)
  
  main2(globvar2)
  .then(console.log)
  .catch(console.error)
  // what if I keep this open, and add mongo driver CRUD function to Express function? 
  .finally(() => client.close());

})

// UPDATE -> TWO VARS, one for find and one for set 

/*
on the log in page, you can READ(find) OR you can UPDATE(find&&set)
*/

let findVar = "original findVar"
let setVar = "original setVar"

// tricky, it's going to be part of log in's page
// tricky, it's going to find AND update
// tricky, it's going a varied UI 

// req.query === TWO Variables, not ONE 
app.get('/updated', (req, res) => {
  let stringed = JSON.stringify(req.query);  
  let parsed = JSON.parse(stringed);

  findVar = parsed.fname; 
  setVar = parsed.nname; 

  console.log(parsed.fname, parsed.nname);
  
  res.render('updated', { findVar: `This is the found: data ${parsed.fname}`,
  setVar: `This is the set: data ${parsed.nname}` });
  console.log(req.query)
  
  main3(findVar, setVar)
  .then(console.log)
  .catch(console.error)
  // what if I keep this open, and add mongo driver CRUD function to Express function? 
  .finally(() => client.close());

})