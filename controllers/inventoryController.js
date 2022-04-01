const knex = require('knex')(require('../knexfile').development);

exports.getInv = (req, res) => {
    console.log(req.query)

    const query = knex('inventory')
        .select(
            'inventory.id',
            'inventory.title',
            'inventory.depth',
            'inventory.target'
        )

        query
        .then((userInventory) => {
            res.json(userInventory);
        })
}

exports.addInv = (req, res) => {
    if (!req.body.title || !req.body.depth || !req.body.target) {
        res.status(400).send({
            message: "Please submit a complete form."
        })
    } else {
        knex('inventory')
            .insert(req.body)
            .then(newItem => {
                res.json(newItem)
            })            
    }
}