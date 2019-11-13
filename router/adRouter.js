const {Ad, User} = require('../db')
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
        .findByPk(req.params.id, {include: [User]})
        .then(ad => {
            if(!ad){
                res.status(404).end()
            }else{
                res.status(200).json(ad)
            }
        })
        .catch(next)
})

router.put('/ads/:id', (req, res, next)=>{
    Ad
        .findByPk(req.params.id)
        .then(ad => {
            if(!ad){
                res.status(404).end()
            }else{
                ad
                    .update(req.body)
                    .then(ad => res.status(200).json(ad))
            }
        })
        .catch(next)
})

router.delete('/ads/:id', (req, res, next)=>{
    Ad
        .destroy({
            where: {
                id: req.params.id
            }
        })
        .then(numberOfAdDeleted => {
            if(!numberOfAdDeleted){
                res.status(404).end()
            }else{
                res.status(204).end()
            }
        })
        .catch(next)
})

module.exports = router
