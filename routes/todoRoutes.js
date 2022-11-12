const express = require('express');

const router = express.Router();
const controller = require('../controllers/todoControllers');


//endpoint to add a new task
router.post('/addTask', controller.addTask)

//endpoint obtains all the tasks
router.get('/allTasks', controller.alltasks);

//endpoint to get a particular task
router.get('/:id', controller.findOne);

// //endpoint to update a particular task
router.put('/edit/:id', controller.update);


// //endpoint to delete a particular task
router.delete('/:id', controller.deleteUser);

module.exports = router;