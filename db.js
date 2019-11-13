const { Sequelize, Model, DataTypes } = require('sequelize');
const databaseUrl = 'postgres://postgres:secret@localhost:5432/postgres'
const db = new Sequelize(databaseUrl)

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  email: DataTypes.TEXT,
  phone: DataTypes.STRING,
  password: DataTypes.STRING
}, { sequelize: db, modelName: 'user' });

class Ad extends Model {}
Ad.init({
  title: DataTypes.STRING,
  desc: DataTypes.TEXT,
  price: DataTypes.INTEGER, //decimal?
  pictureUrl: DataTypes.TEXT
}, { sequelize: db, modelName: 'ad' });

Ad.belongsTo(User)

module.exports = {db, User, Ad}



