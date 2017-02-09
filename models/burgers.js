// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Chirp = sequelize.define("allcharacters", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  routeName: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  role: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  forcePoints: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: false
});

// Syncs with DB
allcharacters.sync();
//creates database

// Makes the Chirp Model available for other files (will also create a table)
module.exports = allcharacters;

