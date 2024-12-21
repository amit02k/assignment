const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    createdAt: {
        type: Date,
        default: Date.now()

    }
})

module.exports = mongoose.model('notes', notesSchema)