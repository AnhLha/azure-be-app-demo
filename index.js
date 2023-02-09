const express = require('express')
const bodyParse = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParse.json())

app.get('/', (req, res) => {
    res.send('Hello World! I am BE demo application');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});