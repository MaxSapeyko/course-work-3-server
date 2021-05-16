const { PersonalFile } = require('../models/models');
const ApiError = require('../error/ApiError');

class PersonalFileController {
  async create(req, res) {
    const { registrationDate, releaseDate, dismissalReason, conscriptId } = req.body;
    const personalFile = await PersonalFile.create({ registrationDate, releaseDate, dismissalReason, conscriptId });
    return res.json(personalFile);
  }

  async getAll(req, res) {
    const personalFiles = await PersonalFile.findAll();
    return res.json(personalFiles);
  }
}

module.exports = new PersonalFileController();
