const express = require('express');
const mongoose = require('mongoose');



const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const io = require('socket.io')(server, { origins: '*:*'});
// io.origins(['*']);
// io.set('origins', 'http://192.168.1.99:3333');


io.on('connection', socket => {
    console.log('Nova conexao', socket.id);
});

mongoose.connect('mongodb+srv://cesarbalzer:XXXXXXXXXX@cluster0-x3vwt.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);