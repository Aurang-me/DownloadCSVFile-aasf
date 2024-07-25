// const { DataTypes } = require("sequelize");
// const { sequelize } = require("../Database/dbConnection");

// const Customer = sequelize.define(
//     "Customer",
//     {
//       id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
//       name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//     },
//     {
//       tableName: "Customer",
//     }
//   );
//   Customer.sync();
//   module.exports = Customer;