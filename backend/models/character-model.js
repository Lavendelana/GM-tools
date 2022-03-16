const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Character = new Schema(
    {
        name: { type: String, required: true },
        class: { type: String, required: true },
        race: { type: String, required: true },
        level: { type: Number, required: true },
        color: { type: String },
        weapons: { type: [String] },
        armor: { type: String },
        storyNotes: { type: String },
        sessionNotes: { type: String },
    },
    { timestamps: true },
)

module.exports = mongoose.model('characters', Character)