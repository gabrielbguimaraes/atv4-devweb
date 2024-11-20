import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Supplier extends Model {}

Supplier.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact: { 
    type: DataTypes.STRING,
    allowNull: true, 
  },
}, {
  sequelize,
  modelName: 'Supplier',
  tableName: 'Suppliers',
});

export default Supplier;