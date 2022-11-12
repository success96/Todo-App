const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.URI;

async function connect (uri) {
    try {
        mongoose.connect(URI);
        console.log('Connected to MongoDb')
    } catch (error) {
        console.log(error.message)        
    }
};

module.exports = connect