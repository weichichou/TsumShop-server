const {Ad} = require('../db')
const { Router } = require('express')
const router = new Router

router.get('/ads', (req, res, next)=>{
    Ad
        .findAll()
        .then(list => res.status(200).send(list))
        .catch(next)
})

module.exports = router
