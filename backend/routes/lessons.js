const express = require('express')
const Lesson = require('../models/lessonModel')

const router = express.Router()

// GET all lessons
router.get('/', async (req, res) => {
    const lessons = await Lesson.find() 
    res.json(lessons)
})

// GET a single lesson description
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single lesson'})
})

// POST a single lesson id on done click
router.post('/:id', async (req, res) => {
    const {lessonNo, name, done} = req.body

    try {
        const lesson = await Lesson.create({lessonNo, name, done})
        res.status(200).json(lesson)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
    
})

router.put('/:id', async (req, res) => {
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
})




module.exports = router