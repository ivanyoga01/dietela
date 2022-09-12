// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Pekerjaan = db.define('pekerjaan', {
  // Define attributes
  nama: {
    type: DataTypes.STRING
  },
  gaji: {
    type: DataTypes.INTEGER
  }
},{
  // Freeze Table Name
  freezeTableName: true
});

// Export model User
export default Pekerjaan;
