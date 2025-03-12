import express from "express";

export class DoctorSpecialtyController {
  constructor(specialtyService) {
    this.router = express.Router({ mergeParams: true });
    this.specialtyService = specialtyService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.addSpecialty.bind(this));
  }

  async addSpecialty(req, res) {
    try {
      const { id } = req.params;
      const { specialties } = req.body;

      const doctor = await this.specialtyService.addSpecialty(id, specialties);

      res.status(200).json(doctor);
    } catch (error) {
      if (error.message === "Doctor not found.") {
        res.status(404).json({ error: error.message });
      } else if (error.message === "Specialty already exists.") {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error." });
      }
    }
  }
}
