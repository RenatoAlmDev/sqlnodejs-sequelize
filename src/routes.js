const express = require("express");
const routes = express.Router();

const PlanetController = require("../controller/PlanetController");
const SatelliteController = require("../controller/SatelliteController");
const CapController = require("../controller/CapController");
const SpaceshipController = require("../controller/SpaceshipController");

// Planets routes
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

// Satellites routes
routes.post("/planets/:planetId/satellites", SatelliteController.store);
routes.get("/planets/:planetId/satellites", SatelliteController.index);

// Captain routes
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

// Spaceship routes
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);

module.exports = routes;
