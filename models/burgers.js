// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var burger = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burgerName: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.STRING
  },
}, {
  timestamps: false
});

// Syncs with DB
burger.sync();
//creates database

// Makes the Chirp Model available for other files (will also create a table)
module.exports = burger;

