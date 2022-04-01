const inventoryController = require('../controllers/inventoryController');
const router = require('express').Router();

router.route('/')
    .get(inventoryController.getInv)
    .post(inventoryController.addInv);

    module.exports = router;