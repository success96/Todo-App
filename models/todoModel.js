const {Schema, model} = require('mongoose');


const todoSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const todoModel = model('todoTasks', todoSchema);

module.exports = todoModel;
