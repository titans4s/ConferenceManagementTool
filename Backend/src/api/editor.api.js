const express = require('express');
const router = express.Router();
const controller = require('../controllers/editor.controller');

module.exports = function () {
  router.post('/create', controller.createEditor);
  
  return router;
} 