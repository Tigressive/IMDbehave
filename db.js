const mongoose = require('mongoose');
require('dotenv').config();

module.exports = function (){
    const {DBPATH} = process.env;
    mongoose.connect(DBPATH)
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });

    mongoose.connection.on('connected', () => {
        console.log('We connected to the DB');
    });

    mongoose.connection.on('error', () => {
        console.log('We did not connect to the DB');
    });


    process.on('SIGINT', () => {
        mongoose.connection.close(true, () => {
            console.log('Forcing the connection to close');
            process.exit(0);
        });
    });
}
