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




app.get('/')
app.listen(3000)

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
})


app.post('/', (req, res) => {

})

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
  // .finally(() => client.close());

})





  