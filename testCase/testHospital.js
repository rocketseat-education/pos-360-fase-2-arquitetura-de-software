import { appointment, doctor, patient } from "./entities.js";
import { appointmentService, doctorService, patientService } from "./service.js";

doctorService.addDoctor(doctor);
doctorService.addDoctorWorkingHours(doctor.id, "Friday", "09:00 AM - 05:00 PM");

patientService.addPatient(patient);

appointmentService.execute(appointment);
