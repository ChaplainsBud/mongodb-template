import { MongoClient } from 'mongodb';
import express from 'express';
const app = express();

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
  

})

// res.render('hmm', { variable for pug? })

// req.body -> can be put in a POST method, raw/test:json; try Postman
// req.hostname -> can be taken by a GET method, this and all below can be put in an object, and console.dir(obj); 
// req.params
// req.query
// req.param

// res.json() -> respond with a {"key":"value"}
// res.render('index')
// res.send('hello express') 




///////////////////// DB below; Express Above

console.log('working so far')

// Connection URL
const url = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ignqx.mongodb.net/Sandbox?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'Sandbox';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');


  // the following code examples can be pasted here...
  
  //CREATE
  // const insertResult = await collection.insertMany([{ name: "Timmy" }, { name: "Titus" }, { name: "Fred" }]);
  // console.log('Inserted documents =>', insertResult);


// I'm moving this above 
  // const insertResult = await collection.insertOne({name: `${globvar}`});
  // console.log('Inserted documents =>', insertResult);

  //READ
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // const filteredDocs = await collection.find({ a: 3 }).toArray();
  // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  //UPDATE
  // const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  // console.log('Updated documents =>', updateResult);

  //DELETE
  // const deleteResult = await collection.deleteMany({ a: 3 });
  // console.log('Deleted documents =>', deleteResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  // what if I keep this open, and add mongo driver CRUD function to Express function? 
  // .finally(() => client.close());

  