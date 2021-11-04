# mongodb-template

0. This repo will be made into a template for other projects to be cloned, and then built upon.

https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository

1. Get the mongodb driver:

https://www.npmjs.com/package/mongodb

2. Do I need the mongod running? Usually I skip it.

Is mongod for a localhost server vs. the server on Atlas?

3. Script: npm start

   "start": "nodemon server.js"

4. Set up Connection:

a. URL for MongoDB server
b. const client = new MongoClient(url);
c. async function
d. const dbName = 'Sandbox';
const db = client.db(dbName);
e. const collection = db.collection('kittens');

5. Add CRUD functions

I. Create:

const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
console.log('Inserted documents =>', insertResult);

const insertResult = await collection.insertOne({ a: 1 });
console.log('Inserted documents =>', insertResult);

II. Read:

const findResult = await collection.find({}).toArray();
console.log('Found documents =>', findResult);

const filteredDocs = await collection.find({ a: 3 }).toArray();
console.log('Found documents filtered by { a: 3 } =>', filteredDocs);

III. Update:

const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
console.log('Updated documents =>', updateResult);

IV. Delete

const deleteResult = await collection.deleteMany({ a: 3 });
console.log('Deleted documents =>', deleteResult);

6. Create UI with HTML, Integrate with NodeJS, Have UI CRUD with variables in MongoDB

a. HTML
b. Integrate
c. CRUD with variables

7.
