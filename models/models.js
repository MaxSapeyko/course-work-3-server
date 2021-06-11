const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Commissariat = sequelize.define('commissariat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, require: true },
  address: { type: DataTypes.STRING, unique: true, require: true },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    require: true,
    validate: { len: [9, 13] },
  },
});

const CallUp = sequelize.define('call_up', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  callUpDate: { type: DataTypes.DATEONLY },
  conscriptList: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
});

const Conscript = sequelize.define('conscript', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING, require: true },
  name: { type: DataTypes.STRING, require: true },
  surname: { type: DataTypes.STRING, require: true },
  birthday: { type: DataTypes.DATEONLY, require: true },
  placeOfBirth: { type: DataTypes.STRING, require: true },
  sex: { type: DataTypes.STRING, require: true },
  homeAddress: { type: DataTypes.STRING, require: true },
  photo: { type: DataTypes.STRING, require: true },
  passportCode: { type: DataTypes.STRING, unique: true, require: true, validate: { len: [8, 8] }, },
  registrationNumber: { type: DataTypes.STRING, unique: true, require: true, validate: { len: [10, 10] } },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    require: true,
    validate: { len: [9, 13] },
  },
});

const Relative = sequelize.define('relative', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING, require: true },
  name: { type: DataTypes.STRING, require: true },
  surname: { type: DataTypes.STRING, require: true },
  homeAddress: { type: DataTypes.STRING, require: true },
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    require: true,
    validate: { len: [9, 13] },
  },
});

const Work = sequelize.define('work', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  organizationName: { type: DataTypes.STRING, require: true },
  address: { type: DataTypes.STRING, require: true },
});

const Study = sequelize.define('study', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  organizationName: { type: DataTypes.STRING, unique: true, require: true },
  address: { type: DataTypes.STRING, require: true },
});

Commissariat.hasMany(CallUp);
CallUp.belongsTo(Commissariat);

CallUp.hasMany(Conscript);
Conscript.belongsTo(CallUp);

Relative.hasMany(Conscript);
Conscript.belongsTo(Relative);

Work.hasMany(Conscript);
Conscript.belongsTo(Work);

Study.hasMany(Conscript);
Conscript.belongsTo(Study);

module.exports = {
  Commissariat,
  Conscript,
  CallUp,
  Relative,
  Work,
  Study,
};
