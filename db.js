import mongoose from "mongoose";

// const MONGO_URI = "mongodb://mongodbi_db:27017/mydatabase";
const MONGO_URI = "mongodb://mymongodb/testdb";

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