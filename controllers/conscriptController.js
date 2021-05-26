const { Conscript } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class ConscriptController {
  async create(req, res, next) {
    try {
      const {
        lastname,
        name,
        surname,
        birthday,
        placeOfBirth,
        sex,
        homeAddress,
        passportCode,
        registrationNumber,
        phoneNumber,
        callUpId,
        relativeId,
        workId,
        studyId,
      } = req.body;

      const { photo } = req.files;
      let fileName = uuid.v4() + '.jpg';
      photo.mv(path.resolve(__dirname, '..', 'static', fileName));
      const _id = uuid.v4();

      const conscript = await Conscript.create({
        _id,
        lastname,
        name,
        surname,
        birthday,
        placeOfBirth,
        sex,
        homeAddress,
        photo: fileName,
        passportCode,
        registrationNumber,
        phoneNumber,
        callUpId,
        relativeId,
        workId,
        studyId,
      });

      return res.json(conscript);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    const conscripts = await Conscript.findAll();
    return res.json(conscripts);
  }

  async getByIdArr(req, res) {
    const conscripts = await Conscript.findAll({
      where: { id: req.body.conscriptId },
    });
    return res.json(conscripts);
  }
}

module.exports = new ConscriptController();
