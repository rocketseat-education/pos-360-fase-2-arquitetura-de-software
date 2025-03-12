import express from "express";

export class DoctorAvailabilityController {
  constructor(doctorAvailabilityService) {
    this.router = express.Router({ mergeParams: true });
    this.doctorAvailabilityService = doctorAvailabilityService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get("/:id", this.checkAvailability.bind(this));
  }

  async checkAvailability(req, res) {
    try {
      const { id } = req.params;
      const { date } = req.query;

      const dateObj = new Date(date);
      if (isNaN(dateObj.getTime())) {
        throw new Error("Invalid date format.");
      }

      const isAvailable = this.doctorAvailabilityService.isDoctorAvailable(
        id,
        dateObj
      );

      res.status(200).json({ available: isAvailable });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
