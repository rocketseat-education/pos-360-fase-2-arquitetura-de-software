export class Appointment {
  constructor(id, date, patient, doctor, reason, status, notes) {
    this.id = id;
    this.date = date;
    this.patient = patient;
    this.doctor = doctor;
    this.reason = reason;
    this.status = status;
    this.notes = notes;
  }

  hasConflict(otherAppointment) {
    return this.date.getTime() === otherAppointment.date.getTime();
  }
}
