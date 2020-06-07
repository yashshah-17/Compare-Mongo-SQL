const express =require('express');
const mongoConnection = require('./db/mongo/connection').start();
const sqlConnection = require('./db/sql/connection')();

const model = require('./db/mongo/model')();

const app = express();
const port = 3000;

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});

app.get('/mongo/:location', async function (req, res) {
    try {
        const location = req.params.location;
        await model.find({GEO: location}).exec((err, data) => {
            res.json(data).status(200);
            return data;
        });
    }
    catch (err) {
        console. log(err);
        res.send(" Status 501 : Internal Server Error")
    }
});

app.get('/sql/:location', async function (req, res) {
    try {
        const location = req.params.location;
        sqlConnection.query(`SELECT * from casestudy WHERE GEO = '${location}'`, function (error, results) {
            if (error) throw error;
            res.json(results).status(200);
        });
    }
    catch (err) {
        console. log(err);
        res.send(" Status 501 : Internal Server Error")
    }
});



