const { Work } = require('../models/models');

class WorkController {
  async create(req, res) {
    const { organizationName, address } = req.body;
    const work = await Work.create({ organizationName, address });
    return res.json(work);
  }

  async getAll(req, res) {
    const works = await Work.findAll();
    return res.json(works);
  }

  async getById(req, res) {
    const work = await Work.findByPk(req.params.id);
    return res.json(work);
  }
}

module.exports = new WorkController();
