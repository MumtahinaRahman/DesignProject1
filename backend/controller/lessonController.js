const Lesson = require('../models/lessonModel')
const mongoose = require('mongoose')
const { Less } = require('@tensorflow/tfjs-core')


// get all lessons

const getLessons = async(req, res) => {
    const user_id = req.user._id
    const lessons = await Lesson.find({user_id}).sort({createdAt: -1})

    console.log(lessons)
    
    res.status(200).json(lessons)
}

// get a single lesson

const getLesson = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such lesson'})
    }

    const lesson = await Lesson.findById(id)

    if(!lesson) {
        return res.status(404).json({error: 'No such lesson'})
    }

    res.status(200).json(lesson)
}

// create a new lesson

const createLesson = async(req, res) => {
    const {lessonNo, name, description} = req.body

    // add doc to db

    try {
        const user_id = req.user._id
        const lesson = await Lesson.create({lessonNo, name, description, user_id})
        res.status(200).json(lesson)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a lesson

const deleteLesson = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such lesson'})
    }

    const lesson = await Lesson.findOneAndDelete({_id: id})

    if(!lesson) {
        return res.status(400).json({error: 'No such lesson'})
    }

    res.status(200).json(lesson)
    
}

// update a lesson

const updateLesson = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such lesson'})
    }

    const lesson = await Lesson.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!lesson) {
        return res.status(400).json({error: 'No such lesson'})
    }

    res.status(200).json(lesson)
    
}



// Done a lesson 

const doneLesson = async(req, res) => {
    const lesson = await Lesson.findByIdAndUpdate(
        req.params.id,
        {
            done: true
        },
        {
            new: true
        }
    )
    res.json(lesson)
}

module.exports = {
    createLesson,
    getLessons,
    getLesson,
    deleteLesson,
    updateLesson, 
    doneLesson
}