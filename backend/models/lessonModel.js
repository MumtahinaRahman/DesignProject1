const mongoose = require('mongoose')

const Schema = mongoose.Schema

const lessonSchema = new Schema({
    lessonNo: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    done: {
        type: Boolean,
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model('Lesson', lessonSchema)