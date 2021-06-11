const { Work } = require('../models/models');

class WorkController {
  async create(req, res) {
    try {
      const { organizationName, address } = req.body;
      const work = await Work.create({ organizationName, address });
      return res.json(work);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const works = await Work.findAll();
      return res.json(works);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getById(req, res) {
    try {
      const work = await Work.findByPk(req.params.id);
      return res.json(work);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new WorkController();
