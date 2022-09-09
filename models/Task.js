const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    _id:String,
    name:{
        type:String,
        required:[true,"think you can get away without giving your name kind stranger?"],
        maxlength:[20,"No long names allowed"]
    },
    completed:{
        type:Boolean,
        default:false
    }
});

const Task = new mongoose.model("Task",taskSchema)

module.exports = Task;
