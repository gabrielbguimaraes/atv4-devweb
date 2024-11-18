import sequelize from '../config/database.js';
import Product from './Product.js';
import Supplier from './Supplier.js';
import PurchaseHistory from './PurchaseHistory.js';


const syncModels = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Unable to synchronize models with the database:', error);
  }
};

syncModels();

export { Product, Supplier, PurchaseHistory };