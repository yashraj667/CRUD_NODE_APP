const express = require('express')
const router = express.Router()

const employeeController =   require('../controllers/employee.controller');


router.post('/', employeeController.create);

// Retrieve all employees
router.get('/', employeeController.findAll);

// Retrieve a single employee with id
router.get('/:id', employeeController.findById);

// Delete a employee with empid
router.delete('/:id', employeeController.delete);

// Update a employee with id
router.put('/:id', employeeController.update);

module.exports = router