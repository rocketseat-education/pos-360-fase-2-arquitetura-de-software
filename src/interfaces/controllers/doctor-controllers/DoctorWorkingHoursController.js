import express from "express";

export class DoctorWorkingHoursController {
  constructor(workingHoursService) {
    this.router = express.Router({ mergeParams: true });
    this.workingHoursService = workingHoursService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.addWorkingHours.bind(this));
    this.router.delete("/", this.removeWorkingHours.bind(this));
    this.router.get("/", this.listWorkingHours.bind(this));
  }

  async addWorkingHours(req, res) {
    try {
      const { id } = req.params;
      const { day, timeSlot } = req.body;
      const doctor = await this.workingHoursService.addWorkingHours(
        id,
        day,
        timeSlot
      );
      res.status(200).json(doctor);
    } catch (error) {
      if (error.message === "Doctor not found.") {
        res.status(404).json({ error: error.message });
      } else if (error.message === "Working hours already exist.") {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error." });
      }
    }
  }

  async removeWorkingHours(req, res) {
    try {
      const { id } = req.params;
      const { day, timeSlot } = req.body;
      const doctor = await this.workingHoursService.removeWorkingHours(
        id,
        day,
        timeSlot
      );
      res.status(200).json(doctor);
    } catch (error) {
      if (error.message === "Doctor not found.") {
        res.status(404).json({ error: error.message });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  }

  async listWorkingHours(req, res) {
    try {
      const { id } = req.params;
      const workingHours = await this.workingHoursService.listWorkingHours(id);
      res.status(200).json(workingHours);
    } catch (error) {
      if (error.message === "Doctor not found.") {
        res.status(404).json({ error: error.message });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  }
}
