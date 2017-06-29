const mongoose = require('mongoose');
const logger = require(__base + 'app/lib/logger');
const mongo = 'mongodb://' + process.env.MONGO_HOST + '/' + process.env.MONGO_DB;

mongoose.Promise = require('bluebird');
mongoose.connect(mongo+'?poolSize=20', {useMongoClient: true}, err => {
    if (err) {
        logger.error(err);
    }
});

mongoose.connection.on('connected', () => {
    logger.info('Mongoose default connection open. Host:', process.env.MONGO_HOST, 'DB:', process.env.MONGO_DB);
});

mongoose.connection.on('error', err => {
    logger.info('Mongoose default connection error: ' + err);
    logger.info('reconect');
    mongoose.connect(mongo, {useMongoClient: true}, err => {
        if (err) {
            logger.error(err);
        }
        logger.info('Connected on MongoDB:', process.env.MONGO_HOST);
    });
});

mongoose.connection.on('disconnected', () => {
    logger.info('Mongoose default connection disconnected');
    logger.info('reconect');
    mongoose.connect(mongo, {useMongoClient: true}, (err) => {
        if (err) {
            logger.error(err);
        }

        logger.info('Connected on MongoDB:', process.env.MONGO_HOST);
    });
});
