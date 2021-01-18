const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const users = [ 
    {username: 'kajal', password:'jain'}, 
    {username: 'test', password:'test'}, 
    {username: 'mail', password:'mail'}
];

function authenticate(req, res, next) {
    const user = users.find(u => u.username === req.body.username && u.password === req.body.password);
    console.log(user, req, 'kajal')
    if (user) {
        res.send({isAuthenticated: true});
    }
    res.send({isAuthenticated: false});
}

app.use('/authenticate', authenticate);

app.options('*', cors())
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});