const { Relative } = require('../models/models');
const ApiError = require('../error/ApiError');

class RelativeController {
  async create(req, res) {
    try {
      const { lastname, name, surname, homeAddress, phoneNumber } = req.body;
      const relative = await Relative.create({
        lastname,
        name,
        surname,
        homeAddress,
        phoneNumber,
      });
      return res.json(relative);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const relatives = await Relative.findAll();
      return res.json(relatives);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getById(req, res) {
    try {
      const relative = await Relative.findByPk(req.params.id);
      return res.json(relative);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new RelativeController();
