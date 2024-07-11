import mongoose from "mongoose";

// const MONGO_URI = "mongodb://mongodbi_db:27017/mydatabase";
// const MONGO_URI = "'mongodb://mongo:27017/myDatabase'";
// const MONGO_URI = "mongodb://prateekNetwork/testdb";
// const MONGO_URI = "mongodb://mongoDBPrateek:27017/testdb";
const MONGO_URI = "mongodb://mongoDB:27017/testdb";
console.log("My name is Prateek Verma")

// const MONGO_URI = "mongodb://localhost:27017/testdb";
console.log(`MONGO_URI is this :${MONGO_URI}`);
mongoose.connect(MONGO_URI, {})
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => {
        console.error('Failed to connect to MongoDB with URI:', MONGO_URI);
        console.error(err);
    });

const EntrySchema = new mongoose.Schema({
    text: String,
    date: { type: Date, default: Date.now },
});

export const Entry = mongoose.model('Entry', EntrySchema);