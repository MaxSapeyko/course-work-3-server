const { Commissariat } = require('../models/models');
const ApiError = require('../error/ApiError');

class CommissariatController {
  async create(req, res) {
    try {
      const { name, address, phoneNumber } = req.body;
      const commissariat = await Commissariat.create({
        name,
        address,
        phoneNumber,
      });
      return res.json(commissariat);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const commissariats = await Commissariat.findAll();
      return res.json(commissariats);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new CommissariatController();
