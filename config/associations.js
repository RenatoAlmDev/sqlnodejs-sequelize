const Planet = require("../models/Planet");
const Satellite = require("../models/Satellite");
const Cap = require("../models/Cap");
const Spaceship = require("../models/Spaceship");

Planet.hasOne(Satellite, { onDelete: "Cascade", onUpdate: "CASCADE" });
Satellite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });

// Planet.hasMany(Satellite, { onDelete: "Cascade", onUpdate: "CASCADE" });
// Satellite.belongsTo(Planet, { foreignKey: "planetId", as: "planet" });

Cap.belongsToMany(Spaceship, {
  foreignKey: "capId",
  through: "capSpaceship",
  as: "spaceships",
});

Spaceship.belongsToMany(Cap, {
  foreignKey: "spaceshipId",
  through: "capSpaceship",
  as: "caps",
});

module.exports = { Planet, Satellite, Cap, Spaceship };
