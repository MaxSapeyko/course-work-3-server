const { CallUp } = require('../models/models');
const ApiError = require('../error/ApiError');

class CallUpController {
  async create(req, res) {
    const { callUpDate, commissariatId, conscriptList } = req.body;
    const callUp = await CallUp.create({ callUpDate, commissariatId, conscriptList });
    return res.json(callUp);
  }

  async getAll(req, res) {
    const callUps = await CallUp.findAll();
    return res.json(callUps);
  }

  async getByCommId(req, res) {
    const callUps = await CallUp.findAll({ where: { commissariatId: req.params.id } });
    return res.json(callUps);
  }
}

module.exports = new CallUpController();
