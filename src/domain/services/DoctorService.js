import { Doctor } from "../entities/Doctor.js";

export class DoctorService {
  constructor(doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  addDoctor(doctorData) {
    const doctor = new Doctor(
      doctorData.id,
      doctorData.rcm,
      doctorData.name,
      doctorData.specialties,
      doctorData.phone
    )

    this.doctorRepository.add(doctor.id, doctor);
    return doctor;
  }

  findDoctorById(doctorId) {
    return this.doctorRepository.findById(doctorId);
  }

  findAllDoctors() {
    return this.doctorRepository.findAll();
  }

  updateDoctor(doctorId, updatedData) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    Object.assign(doctor, updatedData);

    this.doctorRepository.update(doctorId, doctor);
    return doctor;
  }

  deleteDoctor(doctorId) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    this.doctorRepository.delete(doctorId);
    return doctor;
  }

  addDoctorWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    const hasWorkingHours = doctor.workingHours.hours.some(
      (workingHour) =>
        workingHour.day === day && workingHour.timeSlot === timeSlot
    );

    if (hasWorkingHours) {
      throw new Error('Working hours already exist.');
    }

    doctor.workingHours.hours.push({ day, timeSlot });

    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  removeWorkingHours(doctorId, day, timeSlot) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    doctor.workingHours.hours = doctor.workingHours.hours.filter(
      (hour) => hour.day !== day && hour.timeSlot !== timeSlot
    );
    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  addSpecialty(doctorId, specialty) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    if (doctor.specialties.includes(specialty)) {
      throw new Error('Specialty already exists.');
    }

    doctor.specialties.push(specialty);
    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  listWorkingHours(doctorId) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    return doctor.workingHours.hours();
  }
}
