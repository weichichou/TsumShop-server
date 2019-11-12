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
  //remeber to change price's datatype
  price: DataTypes.STRING,
  pictureUrl: DataTypes.TEXT
}, { sequelize: db, modelName: 'ad' });

Ad.belongsTo(User)

db
    .sync()
    .then(()=>console.log('Database connected'))
    .catch(err=>console.error(err))

module.exports = db



