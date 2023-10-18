const {Face} = require('../modules/face')
const express = require('express')
const router = express.Router() 


router.post('/' , async (req, res) => {
    const face = await Face.findOne({email: req.body.email})
    if(face) 
        return res.status(400).send("Bunday malumot mavjud")
    if(!req.body.photo) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.firstname) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.lastname) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.email) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.phoneNumber) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.direction) 
        return res.status(400).send("Malumot to'liq emas")
    if(!req.body.level) 
        return res.status(400).send("Malumot to'liq emas")

    let faceSave = new Face({
        photo: req.body.photo,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        direction: req.body.direction,
        level: req.body.level,
        telegram: req.body.telegram
    })
    const save = await faceSave.save()
    res.send(save)
})

router.get('/' , async (req,res) => {
    const getData = await Face.find()
    .select({ __v: 0})
    res.send(getData)
})


router.get('/:id' , async (req,res) => {
    Face.findById(req.params.id)
    .then((response) => {
        res.status(200).json({
            project:response
        })
    })
})

module.exports = router