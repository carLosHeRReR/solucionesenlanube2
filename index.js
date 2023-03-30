const express = require('express')
    const app = express()

    app.get('/', (req, res) => {
        res.sendFile('./static/index.html',{
            root:__dirname});
    });

    app.listen(3005);
    console.log('listening on ${3005}');