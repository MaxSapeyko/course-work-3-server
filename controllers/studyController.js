const { Study } = require('../models/models');
const ApiError = require('../error/ApiError');

class WorkController {
  async create(req, res) {
    const { organizationName, faculty, course, admissionDate, releaseDate, address } = req.body;
    const study = await Study.create({ organizationName, faculty, course, admissionDate, releaseDate, address });
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
