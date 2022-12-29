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

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all lessons routes
router.use(requireAuth)

// GET all lessons
router.get('/', getLessons)

// GET a single lesson description
router.get('/:id', getLesson)

// POST a single lesson id on done click
router.post('/', createLesson)

// Delete a lesson

router.delete('/:id', deleteLesson)

// Update a lesson

router.patch('/:id', updateLesson)

// Done a lesson
router.put('/:id', doneLesson)




module.exports = router