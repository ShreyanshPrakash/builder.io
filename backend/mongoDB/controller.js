const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
const url = `mongodb://localhost:27017`;

async function connectToDatabase(database = "") {

    try{
        let client = await mongoClient.connect(url + database , { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connetct to Db")
        return client;
    }catch( err ){
        console.log("Error while connecting to the mongodDB");
        console.error(err);
        return new throwError("Connection issue");
    }

}

module.exports = { connectToDatabase };

