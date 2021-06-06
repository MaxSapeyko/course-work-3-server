const { Conscript } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { Op } = require('sequelize');

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
        relativeId,
        workId,
        studyId,
      } = req.body;

      const { photo } = req.files;
      let fileName = uuid.v4() + '.jpg';
      photo.mv(path.resolve(__dirname, '..', 'static', fileName));
      const _id = uuid.v4();
      const callUpId = 0;

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

  async getSortedByBirthday(req, res) {
    const conscripts = await Conscript.findAll({
      where: {
        birthday: {
          [Op.between]: [req.params.start, req.params.end],
        },
      },
    });
    return res.json(conscripts);
  }

  async getSortedByLastName(req, res) {
    const conscripts = await Conscript.findAll({
      where: {
        lastname: {
          [Op.like]: req.params.inputStr + '%',
        },
      },
    });
    return res.json(conscripts);
  }

  async delById(req, res) {
    const conscripts = await Conscript.destroy({
      where: { id: req.params.id },
    });
    return res.json(conscripts);
  }

  async updateCallUpId(req, res) {
    const conscript = await Conscript.findByPk(req.params.id);
    conscript.update({ callUpId: req.params.callUpId });
    return res.json(conscript);
  }
}

module.exports = new ConscriptController();
