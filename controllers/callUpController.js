const { CallUp } = require('../models/models');

class CallUpController {
  async create(req, res) {
    try {
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
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async updateConscripts(req, res) {
    try {
      const callUp = await CallUp.findByPk(req.params.id);
      const conscriptList = callUp.conscriptList.splice(
        callUp.conscriptList.indexOf(req.params.conscriptId),
        1
      );
      callUp.update({ conscriptList: conscriptList });
      return res.json(callUp);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const callUps = await CallUp.findAll();
      return res.json(callUps);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getByCommId(req, res) {
    try {
      const callUps = await CallUp.findAll({
        where: { commissariatId: req.params.id },
      });
      return res.json(callUps);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new CallUpController();
