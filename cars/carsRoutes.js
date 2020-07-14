let express = require('express');
let router = express.Router()

router.use("/", (req, res) => {
    res.status(200).json({ carsRouter: "UP" })
})

module.exports = router;