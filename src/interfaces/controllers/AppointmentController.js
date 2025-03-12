import express from "express";

export class AppointmentController {
  constructor(appointmentService) {
    this.router = express.Router();
    this.appointmentService = appointmentService;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post("/", this.scheduleAppointment.bind(this));
    this.router.get("/:id", this.getAppointmentById.bind(this));
    this.router.get("/", this.getAllAppointments.bind(this));
  }

  async scheduleAppointment(req, res) {
    try {
      const appointment = req.body;
      const scheduledAppointment = await this.appointmentService.execute(
        appointment
      );
      res.status(201).json(scheduledAppointment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAppointmentById(req, res) {
    try {
      const { id } = req.params;
      const appointment = await this.appointmentService.findById(id);
      res.status(200).json(appointment);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async getAllAppointments(req, res) {
    try {
      const appointments = await this.appointmentService.findAll();
      res.status(200).json(appointments);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
