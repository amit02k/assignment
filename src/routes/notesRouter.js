const express = require('express')
const router = express.Router()
const notesController = require('../controller/notesController')
const rateLimitMiddleware = require('../middleware/rateLimit')
const authenticateMiddleware = require('../middleware/authenticate')
router.post('/notes',rateLimitMiddleware.rateLimitMiddleware,notesController.createNotes)
router.get('/notes',authenticateMiddleware.authenticate,notesController.getNotes)
router.get('/note/:id',authenticateMiddleware.authenticate,notesController.getNote)
router.get('/notefilter',authenticateMiddleware.authenticate,notesController.getNotesQuery)

module.exports = router