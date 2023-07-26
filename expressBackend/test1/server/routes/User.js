const express = require('express');
const router = express.Router();
const userQuerry = require('../db/user.Querry');

router.use('/',(req, res, next)=>{
    switch (req.method) {
        case 'GET':
            const get = getRequests()
            break;
        case 'POST':
            const post = postRequests()
            break;
        case 'PUT':
            const put = putRequests()
            break;
        case 'DELETE':
            const del = deleteRequests()
            break;
        default:
            break;
    }
    next()
})

const getRequests = () =>{
    router.get('/', async (req,res,next)=>{
        try {
            console.log('Time: ', Date.now())
            let results = await userQuerry.allData();
            res.json(results); 
            // res.send({msg:'yep'})
        }catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    })
    
    router.get('/:id', async (req,res,next)=>{
        try {
            let results = await userQuerry.oneId(req.params.id);
            res.json(results); 
        }catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    })
}


const postRequests=()=>{
    router.post('/', async (req,res,next)=>{
        try {
            let results = await userQuerry.insert(req.body);
            res.json(results); 
        }catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    })
}
const putRequests=()=>{
    router.put('/', async (req,res,next)=>{
        try {
            let results = await userQuerry.upDateRowinsert(req.body);
            res.json(results); 
        }catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    })
}

const deleteRequests=()=>{
    router.delete('/', async (req,res,next)=>{
        try {
            let results = await userQuerry.deleteRow(req.body);
            res.json(results); 
        }catch(error){
            console.log(error);
            res.sendStatus(500)
        }
    })
}


module.exports = router;