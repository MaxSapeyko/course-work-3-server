const { Work } = require('../models/models');
const ApiError = require('../error/ApiError');

class WorkController {
  async create(req, res) {
    const { organizationName, post, admissionDate, releaseDate, address } = req.body;
    const work = await Work.create({ organizationName, post, admissionDate, releaseDate, address });
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
