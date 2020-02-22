require('zone.js');
const express = require('express');
const attachReqestId = require('./middleware/attach-requestid');
const logger = require('./utils/logger');

const app = express();

app.use(attachReqestId);

app.get('/', (req, res) => {
    logger.info('request log', {
        path: req.path
    });
    res.send('hello world');
});

app.listen(3000, () => console.log('listening port 3000'));
