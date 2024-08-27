const db = require("../config/db_config");

// Add a new school
const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query =
    "INSERT INTO school_table (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
  db.query(query, [name, address, latitude, longitude], (err, results) => {
    if (err) {
      return res.status(500).json({ 'success': false,error: err.message });
    }
    res
      .status(201)
      .json({'success': true, message: "School added successfully", id: results.insertId });
  });
};

// Get the list of all schools
const listSchools = (req, res) => {
  const query = "SELECT * FROM school_table";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({'success': true,
        message:'list fetch successfully',schools:results});
  });
};

module.exports = { addSchool, listSchools };
