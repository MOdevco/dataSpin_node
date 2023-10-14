const {default: mongoose} = require("mongoose")


const faceSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    lastname: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 100
    },
    email: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 50
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 10,
        maxLength: 15,
        trim: true
    },
    direction: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true,
    },
    telegram: {
        type: String
    }
})

const Face = mongoose.model("Face" , faceSchema)
exports.Face = Face