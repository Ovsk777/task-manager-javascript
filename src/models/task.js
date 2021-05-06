const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema({
    
    task: {
        required: true,
        minlength: 10,
        type: String
    },
    status: {
        type: Boolean,
        validate(value){
            if(value!== true && value!== false){
                throw new Error('Status has to be a boolean value')
            }
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},{
    timestamps: true
})

const Tasks = mongoose.model('Tasks', taskSchema)

module.exports = Tasks