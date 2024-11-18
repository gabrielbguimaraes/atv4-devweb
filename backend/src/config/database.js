import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('devweb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;