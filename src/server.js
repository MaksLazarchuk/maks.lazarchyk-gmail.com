const express = require('express');
const app = express();
const port = 80;

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});