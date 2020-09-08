const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require('./routes/url-shortner')(app, db);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client', 'build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));