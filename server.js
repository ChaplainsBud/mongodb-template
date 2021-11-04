import { MongoClient } from 'mongodb';

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
  const db = client.db(dbName);
  const collection = db.collection('kittens');

  // the following code examples can be pasted here...
  
  //CREATE
  // const insertResult = await collection.insertMany([{ name: "Timmy" }, { name: "Titus" }, { name: "Fred" }]);
  // console.log('Inserted documents =>', insertResult);

  const insertResult = await collection.insertOne({name:"Minishka"});
  console.log('Inserted documents =>', insertResult);

  //READ
  // const findResult = await collection.find({}).toArray();
  // console.log('Found documents =>', findResult);

  // const filteredDocs = await collection.find({ a: 3 }).toArray();
  // console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

  //UPDATE

  //DELETE


  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());