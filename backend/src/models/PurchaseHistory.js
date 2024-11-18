import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Product from './Product.js';
import Supplier from './Supplier.js';

class PurchaseHistory extends Model {}

PurchaseHistory.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
    },
    supplierId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Supplier,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    purchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'PurchaseHistories',
    sequelize,
  },
);

PurchaseHistory.belongsTo(Product, { foreignKey: 'productId' });
PurchaseHistory.belongsTo(Supplier, { foreignKey: 'supplierId' });

export default PurchaseHistory;
