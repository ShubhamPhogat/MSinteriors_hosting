const Image = require('../models/Upload');
const express = require('express');
// Add a new image
const addImage = async (req, res) => {
  try {
    const newImage = new Image(req.body);
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all images
const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    console.log(images);
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single image by ID
const getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addImage, getAllImages, getImageById };
