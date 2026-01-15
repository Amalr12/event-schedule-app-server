const mongoose=require("mongoose")

const eventSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },endTime: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: String,
        required: true
    }
})

const events = mongoose.model("events", eventSchema)
module.exports = events