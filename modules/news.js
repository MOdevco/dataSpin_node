const {default: mongoose, mongo} = require("mongoose")


const NewsSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    }
})


const News = mongoose.model("New" , NewsSchema)
exports.News = News