const {Project} = require('../modules/project')
const express = require('express')
const router = express.Router()

router.post('/' , async (req, res) => {
    let projest = await Project.findOne({name: req.body.name})
    if(req.body.desc.length < 10) {
        res.status(400).send("Malumot juda kalta")
    }
    if(req.body.name.length < 5) {
        res.status(400).send("Malumot juda kalta")
    }
    if(projest) 
        return res.status(400).send("Bunday nom mavjud")

    let project = new Project({
        photo: req.body.photo,
        name: req.body.name,
        desc: req.body.desc,
        price: req.body.price,
        link: req.body.link
    })

    let saveProject = await project.save()
    res.send(saveProject)
})

router.get('/', async (req, res) => {
    const getData = await Project.find()
    .select({_id: 0 , __v: 0})
    res.send(getData)
})


module.exports = router