const {default: mongoose, mongo, model} = require("mongoose")


const projectSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    desc: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100
    },
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 100000
    },
    link: {
        type: String,
        minLength: 5,
        maxLength: 50
    }

})


const Project = mongoose.model("Project" , projectSchema)
exports.Project = Project