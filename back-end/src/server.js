const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World! This is the back-end server.');
}) 

app.listen(8001, () => {
    console.log('Server is running on port 8001');
})