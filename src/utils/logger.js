const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.prettyPrint(),
    defaultMeta: {
        get requestId() {
            return Zone.current.get('requestId');
        }
    },
    transports: [
        new winston.transports.Console(),
    ]
})

module.exports = logger;