const { MedicalCertificate } = require('../models/models');
const ApiError = require('../error/ApiError');

class MedicalCertificateController {
  async create(req, res) {
    const { commissionDate, illness, conclusion, personalFileId } = req.body;
    const medicalCertificate = await MedicalCertificate.create({ commissionDate, illness, conclusion, personalFileId });
    return res.json(medicalCertificate);
  }

  async getAll(req, res) {
    const medicalCertificates = await MedicalCertificate.findAll();
    return res.json(medicalCertificates);
  }
}

module.exports = new MedicalCertificateController();
