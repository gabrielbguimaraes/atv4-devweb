import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../config/database.js';


class Supplier extends Model {}

Supplier.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Suppliers',
    sequelize,
  },
);

export default Supplier;