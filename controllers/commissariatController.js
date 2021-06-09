const { Commissariat } = require('../models/models');
const ApiError = require('../error/ApiError');

class CommissariatController {
  async create(req, res) {
    const { name, address, phoneNumber } = req.body;
    const commissariat = await Commissariat.create({ name, address, phoneNumber });
    return res.json(commissariat);
  }

  async getAll(req, res) {
    const commissariats = await Commissariat.findAll();
    return res.json(commissariats);
  }
}

module.exports = new CommissariatController();
