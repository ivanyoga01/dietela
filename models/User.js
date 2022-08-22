// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define('user', {
  // Define attributes
  nama: {
    type: DataTypes.STRING
  },
  alamat: {
    type: DataTypes.STRING
  },
  jabatan: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});

// Export model User
export default User;
