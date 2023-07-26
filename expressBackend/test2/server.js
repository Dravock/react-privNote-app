import Joi from 'joi';
import express from 'express';

const app = express();

const arr=[{id:1,name:'root'},{id:2,name:'root2'},{id:3,name:'root3'}]

app.get('/', (req,res) => {
    res.send('Hello World!');
})

app.get('/api/test', (req,res) => {
    res.send(arr);
})





app.listen(3000, ()=> console.log('listening'))
// app.post()
// app.put()
// app.delete()