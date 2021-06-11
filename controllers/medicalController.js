const { MedicalCertificate } = require('../models/models');
const ApiError = require('../error/ApiError');

class MedicalCertificateController {
  async create(req, res) {
    try {
      const { commissionDate, illness, conclusion, personalFileId } = req.body;
      const medicalCertificate = await MedicalCertificate.create({
        commissionDate,
        illness,
        conclusion,
        personalFileId,
      });
      return res.json(medicalCertificate);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }

  async getAll(req, res) {
    try {
      const medicalCertificates = await MedicalCertificate.findAll();
      return res.json(medicalCertificates);
    } catch (error) {
      return res.status(400).json(`Error ${error.message}`);
    }
  }
}

module.exports = new MedicalCertificateController();
