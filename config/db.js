const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongo_url);
        console.log(`Connected to MongoDB database ${mongoose.connection.host}`.bgCyan.black);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;