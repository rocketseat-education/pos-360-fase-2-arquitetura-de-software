import express from "express";

export class DoctorController {
  constructor(doctorService) {
    this.router = express.Router();
    this.doctorService = doctorService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.createDoctor.bind(this));
    this.router.get("/:id", this.getDoctorById.bind(this));
    this.router.get("/", this.getAllDoctors.bind(this));
    this.router.put("/:id", this.updateDoctor.bind(this));
    this.router.delete("/:id", this.deleteDoctor.bind(this));
  }

  async createDoctor(req, res) {
    try {
      const doctor = req.body;
      const createdDoctor = await this.doctorService.addDoctor(doctor);
      res.status(201).json(createdDoctor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getDoctorById(req, res) {
    try {
      const { id } = req.params;
      const doctor = await this.doctorService.findDoctorById(id);
      res.status(200).json(doctor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getAllDoctors(req, res) {
    try {
      const doctors = await this.doctorService.findAllDoctors();
      res.status(200).json(doctors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateDoctor(req, res) {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedDoctor = await this.doctorService.updateDoctor(
        id,
        updatedData
      );
      res.status(200).json(updatedDoctor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteDoctor(req, res) {
    try {
      const { id } = req.params;
      const deletedDoctor = await this.doctorService.deleteDoctor(id);
      res.status(200).json(deletedDoctor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
