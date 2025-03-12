import { Doctor } from "../../entities/Doctor.js";

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
}
