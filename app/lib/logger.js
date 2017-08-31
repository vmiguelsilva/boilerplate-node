import winston from 'winston';
const logger = new (winston.Logger) ({
    transports: [new (winston.transports.Console)({timestamp: true})]
});
export default logger;
