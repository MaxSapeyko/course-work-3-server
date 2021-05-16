const { Relative } = require('../models/models');
const ApiError = require('../error/ApiError');

class RelativeController {
  async create(req, res) {
    const { lastname, name, surname, homeAddress, phoneNumber } = req.body;
    const relative = await Relative.create({ lastname, name, surname, homeAddress, phoneNumber });
    return res.json(relative);
  }

  async getAll(req, res) {
    const relatives = await Relative.findAll();
    return res.json(relatives);
  }

  async getById(req, res) {
    const relative = await Relative.findByPk(req.params.id);
    return res.json(relative);
  }
}

module.exports = new RelativeController();
