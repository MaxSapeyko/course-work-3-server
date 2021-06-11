const { Study } = require('../models/models');

class WorkController {
  async create(req, res) {
    try {
      const { organizationName, address } = req.body;
      const study = await Study.create({ organizationName, address });
      return res.json(study);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const studies = await Study.findAll();
      return res.json(studies);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getById(req, res) {
    try {
      const study = await Study.findByPk(req.params.id);
      return res.json(study);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new WorkController();
