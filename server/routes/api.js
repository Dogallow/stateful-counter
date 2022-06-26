const express = require('express')


const router = express.Router()

const Value = require('../models/value')



router.get('/myBackend', (req, res)=>{
    
    Value.find({ })
    .then((data)=>{
        console.log('Data ', data)
        res.json(data)
    })
    .catch((e)=>{
        console.log('error: ', e)
    })
})

router.post('/save', (req, res)=>{
    
    
    const data = req.body
    const newValue = new Value(data)

    newValue.save((error) => {
        if(error){
            res.status(500).json({msg: 'Sorry, internal server errors'})
        }else {

            res.json({
                msg: "We received your data"
            })
        }
    })
    
})




module.exports = router
