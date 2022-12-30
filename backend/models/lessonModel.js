const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema({
    lessonNo: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean
    },
    user_id: {
        type: String,
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model('Lesson', lessonSchema)