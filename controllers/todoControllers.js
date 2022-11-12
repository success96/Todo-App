
const todoDB = require('../models/todoModel');


//This function helps to fetch all tasks from the database
exports.alltasks = async (req, res) => {
    //fetch all existing tasks
    try {      
        const tasks = await todoDB.find();
        if (tasks.length === 0){
            return res.status(404).json({
                message: 'No user Was found',
            })
        }
        res.status(201).json({
            "message": "These are all available todo tasks",
            "tasks": tasks
        })
    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error!',
            error: err.message
        })
    }
};

//This function is to return a particular task
exports.findOne = async (req, res) => {
    //fetch a particular task with the given id
    //search for the required task from the task DB
    //send the task details corresponding to given id as response to the client
    //return a 404 error if id isnt found
    try {
        let id = {_id: req.params.id};
        
        const task = await todoDB.findOne({id});
        if (task) {
            res.status(400).json({
            "message": "Task Found",
            "task": task
            })
        } else {
            return res.status(404).json({
                message: "Task not found" 
            })
        };
    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error!',
            error: err.message
        })
    };
};
 
//This function is to add a new task to the Db
exports.addTask = async (req, res) => {
    //create a new task from client request
    //save new task to database
    //send back response to client
    //console.log(req.body.newFTask)
    try {
        // Construct a document  
        let {title, description } = await req.body;
        let task = {
            title,
            description,
        }
        // Insert a single document, wait for promise so we can read it back
        let added = await todoDB.create(task);
        if (!added){
            return res.status(400).json({
                message: 'Task creation failed!',
            })
        };

        res.status(201).json({
            message: "Todo task successfully added",
            added,
        })

    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: err.message})
    }
};

//This function is to update an existing task
exports.update = async (req, res) => {
    //create a new task from client request
    //save new task to database
    //send back response to client
    //console.log(req.body.newFTask)
    try {
        // Construct a document  
        let id = {_id: req.param.id}
        let {title, description } = await req.body;
        let task = {
            title,
            description,
        }
        // Insert a single document, wait for promise so we can read it back
        let update = await todoDB.findOneAndUpdate(id, task, {new: true});
        if (!update){
            return res.status(400).json({
                message: 'Task update failed!',
            })
        };

        res.status(201).json({
            message: "Todo task successfully updated",
            task: update,
        })

    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: err.message})
    }
};

//This function is to delete an existing task
exports.deleteUser = async (req, res) => {
    try {
        let id = {_id: req.param.id}
        let {title, description } = await req.body;
        let task = {
            title,
            description,
        }
        let deleted = await todoDB.findOneAndRemove(id);
        if (!deleted){
            return res.status(400).json({
                message: 'Task not deleted!',
            })
        };

        res.status(201).json({
            message: "Todo task successfully deleted",
            task: update
        })

    } catch (err) {
        res.status(500).json({
            message: 'Internal Server Error',
            error: err.message})
    }
};