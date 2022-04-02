const express = require('express');
const cors = require('cors');

module.exports = () => {
  const router = express.Router();

  router.use(cors());
  router.use(express.json());

  return router;
};
