const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
const accessUsers = [{email: 'admin@admin.ru', password: 'admin'}, {email: '1@1.ru', password: '1'}];

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logger('dev'));
app.use(cors());

app.listen(3001, () => {
    console.log('start server - port 3001');
});

/* app.get('/', (req, res) => {
    console.log(req, 'это req');
    res.send('hello');
}); */

app.post('/auth', (req, res) => {
    // console.log(req.body, 'это body');
    // console.log(req.headers, 'это headres');
    // console.log(req.method, 'это method');
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
