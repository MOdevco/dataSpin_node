const {News} = require('../modules/news')
const express = require('express')
const { route } = require('./projects')
const router  = express.Router()

router.post('/', async(req, res) => {
    const news = await News.findOne({email: req.body.email})
    if(news){
        return res.status(400).send('Bunday malumot mavjud')
    }
    if(!req.body.photo){
        return res(400).send('Malumot toliq emas')
    }
    if(!req.body.name){
        return res.status(400).send('Malumot toliq emas')
    }
    if(!req.body.information){
        return res.status(400).send('Malumot toliq emas')
    }

    let newsSave = new News({
        photo: req.body.photo,
        name: req.body.name,
        information: req.body.information
    })
     const save = await newsSave.save()
     res.send(save)
})

module.exports = router