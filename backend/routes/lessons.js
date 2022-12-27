const express = require('express')
// const Lesson = require('../models/lessonModel')
const {
    createLesson,
    getLessons,
    getLesson,
    deleteLesson,
    updateLesson, 
    doneLesson
} = require('../controller/lessonController')

const router = express.Router()

// GET all lessons
router.get('/', getLessons)

// GET a single lesson description
router.get('/:id', getLesson)

// POST a single lesson id on done click
router.post('/:id', createLesson)

// Delete a lesson

router.delete('/:id', deleteLesson)

// Update a lesson

router.patch('/:id', updateLesson)

// Done a lesson
router.put('/:id', doneLesson)




module.exports = router