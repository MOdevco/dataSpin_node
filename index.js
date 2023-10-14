const mongoose = require('mongoose')
const express = require('express')
const app = express()
const projectRouter = require("./routes/projects")
const faceRouter = require('./routes/faces')
const newsRouter = require('./routes/news')
const getRouter = require('./routes/projects')
const getNews = require('./routes/news')
const getFace = require('./routes/faces')
const cors = require('cors')
// const swaggerUI = require('swagger-ui-express');  
// const swaggerDocs = require('./swagger-output.json')
// const swaggerAutogen = require('swagger-autogen')();
// app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
// const doc = {
//     info: {
//         title: 'My API',
//         description: 'Description',
//     },
//     host: '192.168.1.5:5000',
//     schemes: ['http'],
// };
// const outputFile = './swagger-output.json';
// const endpointsFiles = ['./routes/projects.js' , './routes/projects.js'];
// swaggerAutogen(outputFile, endpointsFiles, doc);



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


app.use("/api/project/new", projectRouter)
app.use('/api/create-face/new' , faceRouter)
app.use('/api/create-news/new', newsRouter)
app.use('/api/get-project' , getRouter)
app.use("/api/get-news" , newsRouter)
app.use('/api/get-face' , getFace)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`${port} chi port ishga tushdi`);
})