const express = require('express');
const startQuerry = require('../db/start.Querry');
const router = express.Router();

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
    router.use((req, res,next) =>{
        // console.log('url',req.url)
        switch (req.url) {
            case '/':
                    router.get('/', async (req,res,next)=>{
                        try {
                            let results = await startQuerry.getAllData(req.body);
                            res.json(results) 
                        }catch(error){
                            console.log(error);
                            res.sendStatus(500)
                        }
                    })

                    router.get('/:id', async (req,res,next)=>{
                        try {
                            let results = await startQuerry.getOneRow(req.params.id);
                            res.json(results) 
                        }catch(error){
                            console.log(error);
                            res.sendStatus(500)
                        }
                    })
                break;
            case '/start':
                console.log('hier2',req.url)
                break;
            default:
                break;
        }
        next()
    })
}


const postRequests=()=>{
    router.use((req, res,next) =>{
        switch (req.url) {
            case '/':
                router.post('/', async (req,res,next)=>{
                    try {
                        let results = await startQuerry.insertRow(req.body);
                        res.json(results); 
                    }catch(error){
                        console.log(error);
                        res.sendStatus(500)
                    }
                })
                break;
            default:
                break;
        }
        next();
    })
}


const putRequests=()=>{
    router.use((req,res,next)=>{
        switch (req.url) {
            case '/':
                router.put('/', async (req,res,next)=>{
                    try {
                        let results = await startQuerry.upDateRow(req.body);
                        res.json(results); 
                    }catch(error){
                        console.log(error);
                        res.sendStatus(500)
                    }
                })
                break;
            default:
                break;
        }
        next();
    })
}


const deleteRequests=()=>{
    router.use((req,res,next)=>{
        switch (req.url) {
            case '/':
                router.delete('/', async (req,res,next)=>{
                    try {
                        let results = await startQuerry.deleteRow(req.body);
                        res.json(results); 
                    }catch(error){
                        console.log(error);
                        res.sendStatus(500)
                    }
                })
                break;
            default:
                break;
        }
        next();
    })
}


module.exports = router;