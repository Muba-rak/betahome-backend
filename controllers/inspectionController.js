const Inspections = require("../models/inspection");

//create logged in user
const createInspection = async (req, res) => {
  try {
    const inspection = await Inspections.create({ ...req.body });
    res.status(201).json({ success: true, inspection });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//get all inspection private logged and admin
const getAllInspections = async (req, res) => {
  try {
    const inspections = await Inspections.find().sort("-createdAt");
    res.status(200).json({ success: true, inspections });
  } catch (error) {
    console.log(error);
    res.status(500).json({ err: "internal server error" });
  }
};

module.exports = { createInspection, getAllInspections };
