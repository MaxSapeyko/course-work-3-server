const { Study } = require('../models/models');

class WorkController {
  async create(req, res) {
    const { organizationName, address } = req.body;
    const study = await Study.create({ organizationName, address });
    return res.json(study);
  }

  async getAll(req, res) {
    const studies = await Study.findAll();
    return res.json(studies);
  }

  async getById(req, res) {
    const study = await Study.findByPk(req.params.id);
    return res.json(study);
  }
}

module.exports = new WorkController();
