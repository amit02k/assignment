const notesModel = require('../model/notesModel')

const createNotes = async (req, res) => {
    console.log('notes bosy', req.body)
    
    const notes = await notesModel.create(req.body)
    return res.status(201).json({ msg: 'Notes created successfully', data: notes })
}

const getNotes = async (req, res) => {
    const owner = req.user._id
    const ownerIDInString = owner.toString()
    const notes = await notesModel.find({ owner: ownerIDInString })
    return res.status(201).json({ msg: 'Notes data', data: notes })
}

const getNote = async (req, res) => {
    const owner = req.user._id
    const ID = req.params.id
    const ownerIDInString = owner.toString()
    const note = await notesModel.find({ _id: ID, owner: ownerIDInString })
    return res.status(201).json({ msg: 'Note data', data: note })
}

const getNotesQuery = async (req, res) => {
    try {
        const { tags, title , taglogic} = req.query
        const owner = req.user._id
        const ID = req.params.id
        const ownerIDInString = owner.toString()
        let filter ={}
        if (tags) {
            const tagArray = tags.split(',')
            filter.tags = taglogic === 'or' ? {$in:agArray} : {$all:tagArray}
        }
        filter.owner = ownerIDInString
        if (title) {
            filter.title = {$regex:title, $options: 'i'}
        }
        const notes = await notesModel.find(filter)
        return res.status(201).json({ msg: 'Notes data', data: notes })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ err: err })
    }
}

module.exports = {
    createNotes,
    getNotes,
    getNote,
    getNotesQuery
}