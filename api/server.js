let express = require("express");
let cors = require("cors");
let helmet = require('helmet');
let carsRoutes = require("../cars/carsRoutes");

let server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

// ROUTES END POINTS
server.use("/api/cars", carsRoutes)

// BASE GET ENDPOINT
server.use("/api", (req, res) => {
    res.status(200).json({ api: "UP" })
})

module.exports = server;