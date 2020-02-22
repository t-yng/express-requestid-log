const uuidv4 = require('uuid/v4');

const attachRequestId = (req, res, next) => {
    Zone.current.fork({
        name: 'request',
        properties: {
            requestId: uuidv4()
        }
    })
    .run(next);
}

module.exports = attachRequestId;