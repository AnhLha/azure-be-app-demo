const express = require('express')
const bodyParse = require('body-parser')
const app = express();
const port = 3000;

app.use(bodyParse.json())

app.get('/firstAPI', (req, res) => {
    res.status(200).send('Hello World! I am BE demo application. This is third testing pipeline');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});