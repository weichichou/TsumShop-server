const {Ad} = require('../db')
const { Router } = require('express')
const router = new Router

router.post('/ads', (req, res, next) => {
    Ad
        .create(req.body)
        .then(event => res.json(event))
        .catch(err => next(err))
})

router.get('/ads', (req, res, next)=>{
    Ad
        .findAll()
        .then(list => res.status(200).send(list))
        .catch(next)
})

router.get('/ads/:id', (req, res, next)=>{
    Ad
        .findByPk(req.params.id)
        .then(ad => {
            if(!ad){
                res.status(404).end()
            }else{
                res.status(200).json(ad)
            }
        })
        .catch(next)
})

module.exports = router
