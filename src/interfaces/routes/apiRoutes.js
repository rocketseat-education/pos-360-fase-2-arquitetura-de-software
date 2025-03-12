import { DoctorController } from "../controllers/doctor-controllers/DoctorController.js";
import { ExamController } from "../controllers/ExamController.js";
import { PatientController } from "../controllers/PatientController.js";
import { AppointmentController } from "../controllers/AppointmentController.js";
import { DoctorAvailabilityController } from "../controllers/doctor-controllers/DoctorAvailabilityController.js";
import { DoctorWorkingHoursController } from "../controllers/doctor-controllers/DoctorWorkingHoursController.js";
import { DoctorSpecialtyController } from "../controllers/doctor-controllers/DoctorSpecialtyController.js";

export function setupRoutes(
  app,
  doctorService,
  examService,
  patientService,
  appointmentService,
  doctorAvailabilityService,
  doctorWorkingHoursService,
  doctorSpecialtyService
) {
  const doctorController = new DoctorController(doctorService);
  const examController = new ExamController(examService);
  const patientController = new PatientController(patientService);
  const appointmentController = new AppointmentController(appointmentService);
  const doctorAvailabilityController = new DoctorAvailabilityController(
    doctorAvailabilityService
  );
  const doctorWorkingHoursController = new DoctorWorkingHoursController(
    doctorWorkingHoursService
  );
  const doctorSpecialtyController = new DoctorSpecialtyController(
    doctorSpecialtyService
  );

  app.use("/api/doctors", doctorController.router);
  app.use("/api/doctors/:id/specialties", doctorSpecialtyController.router);
  app.use(
    "/api/doctors/:id/working-hours",
    doctorWorkingHoursController.router
  );
  app.use("/api/exams", examController.router);
  app.use("/api/patients", patientController.router);
  app.use("/api/appointments", appointmentController.router);
  app.use("/api/doctor-availability", doctorAvailabilityController.router);
}
