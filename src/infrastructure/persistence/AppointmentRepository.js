import { Repository } from "../../domain/repositories/Repository.js";

export class AppointmentRepository extends Repository {
  constructor() {
    super();
  }

  findByPatientId(patientId) {
    return this.findAll().filter((appointment) =>
      appointment.patientId === patientId
    );
  }

  findByDoctorId(doctorId) {
    return this.findAll().filter((appointment) =>
      appointment.doctorId === doctorId
    );
  }

  findByStatus(status) {
    return this.findAll().filter((appointment) =>
      appointment.status === status
    );
  }
}
