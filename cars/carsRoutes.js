let express = require('express');
let router = express.Router()
let db = require("../data/connections")
let { handleError } = require('../utils/services');

router.get("/", (req, res) => {
    db.select('*')
    .from("cars")
    .then(cars => {
        res.status(200).json({ data: cars })
    })
    .catch(err => {
        handleError(err, res)
    })
})

router.post('/', (req, res) => {
    let newCar = req.body;
    if(!newCar.make || !newCar.model || !newCar.vin || !newCar.mileage) {
            res.status(404).json({ message: "Ensure all required fields are filled in" })
    } else {
        db("cars")
        .insert(newCar)
        .into("cars")
        .then(ids => {
            db("cars")
            .where({id: ids[0]}) // {ids[0]}
            .first()
            .then(newCar => {
                res.status(201).json({ data: newCar })
            })
            .catch(err => {
                handleError(err, res)
            })
        })
        .catch(err => {
            handleError(err, res)
        })
    }
})

module.exports = router;