const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
