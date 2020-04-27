const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 80;

const path = require('path');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './pages/index.html'));
});

app.post('/form', (req, res) => {
    const { name, email, message } = req.body;
    const text = `${name} - ${email} - ${message}`;

    fs.writeFile('form.txt', text, (err) => {
        if (err) throw err;
        console.log('Файл успішно створений');
    });
    
    res.send('Відгук надісланий!');
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
