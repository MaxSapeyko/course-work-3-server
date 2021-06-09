const sequelize = require('../db');
const { DataTypes, ARRAY, INTEGER } = require('sequelize');

const Commissariat = sequelize.define('commissariat', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING },
});

const CallUp = sequelize.define('call_up', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  callUpDate: { type: DataTypes.DATEONLY },
  conscriptList: { type: DataTypes.ARRAY(DataTypes.INTEGER) },
});

const Conscript = sequelize.define('conscript', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  birthday: { type: DataTypes.DATEONLY },
  placeOfBirth: { type: DataTypes.STRING },
  sex: { type: DataTypes.STRING },
  homeAddress: { type: DataTypes.STRING },
  photo: { type: DataTypes.STRING },
  passportCode: { type: DataTypes.STRING, unique: true },
  registrationNumber: { type: DataTypes.STRING, unique: true },
  phoneNumber: { type: DataTypes.STRING, unique: true },
});

const Relative = sequelize.define('relative', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  lastname: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING },
  surname: { type: DataTypes.STRING },
  homeAddress: { type: DataTypes.STRING },
  phoneNumber: { type: DataTypes.STRING, unique: true },
});

const Work = sequelize.define('work', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  organizationName: { type: DataTypes.STRING, unique: true },
  address: { type: DataTypes.STRING },
});

const Study = sequelize.define('study', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  organizationName: { type: DataTypes.STRING, unique: true },
  address: { type: DataTypes.STRING },
});

const PersonalFile = sequelize.define('personalFile', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  registrationDate: { type: DataTypes.DATEONLY },
  releaseDate: { type: DataTypes.DATEONLY },
  dismissalReason: { type: DataTypes.STRING },
});

const MedicalCertificate = sequelize.define('medicalCertificate', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  commissionDate: { type: DataTypes.DATEONLY },
  illness: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: true },
  conclusion: { type: DataTypes.STRING },
});

Commissariat.hasMany(CallUp);
CallUp.belongsTo(Commissariat);

CallUp.hasMany(Conscript);
Conscript.belongsTo(CallUp);

Relative.hasMany(Conscript);
Conscript.belongsTo(Relative);

Conscript.hasOne(PersonalFile);
PersonalFile.belongsTo(Conscript);

Work.hasMany(Conscript);
Conscript.belongsTo(Work);

Study.hasMany(Conscript);
Conscript.belongsTo(Study);

PersonalFile.hasOne(MedicalCertificate);
MedicalCertificate.belongsTo(PersonalFile);

module.exports = {
  Commissariat,
  Conscript,
  CallUp,
  Relative,
  Work,
  Study,
  PersonalFile,
  MedicalCertificate,
};
