const mongoose = require('mongoose')
const express = require('express')
const app = express()
const projectRouter = require("./routes/projects")
const faceRouter = require('./routes/faces')
const newsRouter = require('./routes/news')
const getRouter = require('./routes/projects')
const getNews = require('./routes/news')
const getFace = require('./routes/faces')
const getIdProject = require('./routes/projects')
const cors = require('cors')
const swaggerUI = require('swagger-ui-express')
const swaggerJSDOC = require('swagger-jsdoc')



let options = {
   definition: {
    openapi: '3.0.0',
    info: {
        title: "DataSpin Swagger",
        vertion:"1.0.0",
        description: "Malumotlarni shu joydan olasiz"
    },
    servers: [
        {
            url: 'http://192.168.1.5:5000/'
        }
    ]
   },
   apis: ['index.js']
}

let swaggerSpec  = swaggerJSDOC(options)
app.use('/modevco-ui' , swaggerUI.serve , swaggerUI.setup(swaggerSpec))


mongoose.connect('mongodb://127.0.0.1:27017/dataspinCode')
    .then((res) => {
        console.log("Mongodb ishga tushdi");
    }).catch((err) => {
        console.log("Mongodbda xatolik yuz berdi");
    })

app.use(express.json())
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ["GET" , "POST" , "PUT" , "DELETE"]
}))


/**
 * @swagger
 * /api/project/new:
 *  post: 
 *      description: salom
 *      parameters:
 *      - name: title
 *        description: malumot turi
 *        required: true
 *        type: String
 *      responsees: 
 *          200: 
 *              description: malumot post
 */
app.use("/api/project/new", projectRouter)
app.use('/api/create-face/new' , faceRouter)
app.use('/api/create-news/new', newsRouter)
app.use('/api/get-project' , getRouter)
app.use("/api/get-news" , getNews)
app.use('/api/get-face' , getFace)
app.use('/api/getId-project' , getIdProject)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`${port} chi port ishga tushdi`);
})