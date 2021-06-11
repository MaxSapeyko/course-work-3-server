const { PersonalFile } = require('../models/models');
const ApiError = require('../error/ApiError');

class PersonalFileController {
  async create(req, res) {
    try {
      const {
        registrationDate,
        releaseDate,
        dismissalReason,
        conscriptId,
      } = req.body;
      const personalFile = await PersonalFile.create({
        registrationDate,
        releaseDate,
        dismissalReason,
        conscriptId,
      });
      return res.json(personalFile);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const personalFiles = await PersonalFile.findAll();
      return res.json(personalFiles);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new PersonalFileController();
