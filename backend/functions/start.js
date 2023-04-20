const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const url = process.env.DATABASE_URL;
//______

const start = async (app) => {
    await mongoose.connect(url);
    app.listen('8000', () => {console.log('App is listening');});
}

module.exports = start;