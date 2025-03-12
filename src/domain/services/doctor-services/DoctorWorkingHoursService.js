import { WorkingHours } from "../../value-objects/WorkingHours.js";

export class DoctorWorkingHoursService {
  constructor(doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  addWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) throw new Error('Doctor not found.');

    if (!doctor.workingHours) {
      doctor.workingHours = new WorkingHours();
    }

    if (
      doctor.workingHours.hours.some(
        (wh) => wh.day === day && wh.timeSlot === timeSlot
      )
    ) {
      throw new Error('Working hours already exist.');
    }

    doctor.workingHours = new WorkingHours([
      ...doctor.hasWorkingHours.hours,
      { day, timeSlot },
    ])

    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  removeWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) throw new Error('Doctor not found.');

    if (!doctor.workingHours) {
      doctor.workingHours = new WorkingHours();
    }

    doctor.workingHours = new WorkingHours(
      doctor.workingHours.hours.filter(
        (wh) => !(wh.day === day && wh.timeSlot === timeSlot)
      )
    )

    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  listWorkingHours(doctorId) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) throw new Error('Doctor not found.');

    if (!doctor.workingHours) {
      doctor.workingHours = new WorkingHours();
    }

    return doctor.workingHours.hours;
  }

  getWorkingHours(doctorId) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) throw new Error('Doctor not found.');

    if (!doctor.workingHours) {
      doctor.workingHours = new WorkingHours();
    }

    return doctor.workingHours;
  }

  isWithinWorkingHours(doctor, date) {
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const timeSlot = date.toLocaleTimeString('en-US', {
      hours: '2-digit',
      minutes: '2-digit',
    });

    return doctor.workingHours.hours.some(
      (workingHours) =>
        workingHours.day === dayOfWeek &&
        this.isTimeWithinSlot(timeSlot, workingHours.timeSlot)
    )
  }
}
