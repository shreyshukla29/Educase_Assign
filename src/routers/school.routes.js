const express = require('express');
const router = express.Router();
const { addSchool, listSchools } = require('../controllers/school.controller');


// Route to add a new school
router.post('/addSchool', addSchool);

// Route to get the list of all schools
router.get('/listSchools', listSchools);

module.exports = router;