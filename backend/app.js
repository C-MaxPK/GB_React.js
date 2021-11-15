const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const accessUsers = [{email: 'admin@admin.ru', password: 'admin'}, {email: '1@1.ru', password: '1'}];
let chats = [
    {id: 'id0', name: 'чатик 1'},
    {id: 'id1', name: 'чатик 2'},
    {id: 'id2', name: 'чатик 3'}
];
const messages = {
    id0: [{id: 0, author: 'Автор Авторович', message: 'Есть кто живой?'}],
    id1: [{id: 0, author: 'Писатель Писателевич', message: 'Всем привет!'}, {id: 1, author: 'Писарчук', message: 'Здароу'}],
    id2: []
};

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.post('/auth', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        for (let i = 0; i < accessUsers.length; i++) {
            if (accessUsers[i].email === email && accessUsers[i].password === password) {
                return res.send(true);
            }
        }
    }
    return res.send(false);
});

app.get('/chats', (req, res) => {
    res.json(chats);
});

app.post('/chats', (req, res) => {
    const { id, name } = req.body;
    chats.push({id: id, name: name});
    res.json(chats);
});

app.delete('/chats', (req, res) => {
    const { id } = req.query;
    chats = chats.filter(el => el.id !== id);
    res.json(chats);
})

app.get('/messages', (req, res) => {
    res.json(messages);
});

app.post('/messages', (req, res) => {
    const { chatId, author, message } = req.body;
    if (messages[chatId] !== undefined) {
        messages[chatId].push({id: messages[chatId].length, author: author, message: message});
    } else {
        messages[chatId] = [{id: 0, author: author, message: message}];
    }
    res.json(messages);
});

app.delete('/messages', (req, res) => {
    const { id } = req.query;
    messages[id] = [];
    res.json(messages);
})

app.listen(3001, () => {
    console.log('start server - port 3001');
});
