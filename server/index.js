const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

// config da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Plataforma ta online!');
});
