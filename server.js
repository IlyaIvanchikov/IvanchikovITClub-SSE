const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.write(`data: Connected to server\n\n`);

    let messageId = 0;

    const intervalId = setInterval(() => {
        messageId += 1;
        res.write(`id: ${messageId}\n`);
        res.write(`event: time-update\n`);
        res.write(`data: ${new Date().toLocaleTimeString()}\n\n`);
    }, 1000);

    req.on('close', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
