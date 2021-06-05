const { CallUp } = require('../models/models');

class CallUpController {
  async create(req, res) {
    const { callUpDate, commissariatId, conscriptList } = req.body;

    if ((commissariatId.length > 0, conscriptList > 0)) {
      const callUp = await CallUp.create({
        callUpDate,
        commissariatId,
        conscriptList,
      });
      return res.json(callUp);
    } else {
      return res.status(400).json('Некоректні дані');
    }
  }

  async updateConscripts(req, res) {
    const callUp = await CallUp.findByPk(req.params.id);
    const conscriptList = callUp.conscriptList.splice(
      callUp.conscriptList.indexOf(req.params.conscriptId),
      1
    );
    callUp.update({ conscriptList: conscriptList });
    return res.json(callUp);
  }

  async getAll(req, res) {
    const callUps = await CallUp.findAll();
    return res.json(callUps);
  }

  async getByCommId(req, res) {
    const callUps = await CallUp.findAll({
      where: { commissariatId: req.params.id },
    });
    return res.json(callUps);
  }
}

module.exports = new CallUpController();
