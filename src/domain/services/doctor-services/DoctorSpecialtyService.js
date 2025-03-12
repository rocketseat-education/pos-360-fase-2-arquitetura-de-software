export class DoctorSpecialtyService {
  constructor(doctorRepository) {
    this.doctorRepository = doctorRepository;
  }

  addSpecialty(doctorId, specialty) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found.');
    }

    if (!doctor.specialties) {
      doctor.specialties = [];
    }

    if (doctor.specialties.includes(specialty)) {
      throw new Error('Specialty already exists.');
    }

    doctor.specialties.push(specialty);

    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  removeSpecialty(doctorId, specialty) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found.');
    }

    if (!doctor.specialties) {
      doctor.specialties = [];
    }

    doctor.specialties = doctor.specialties.filter((s) => s !== specialty);

    this.doctorRepository.update(doctor.id, doctor);
    return doctor;
  }

  listSpecialties(doctorId) {
    const doctor = this.doctorRepository.findById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found.');
    }

    if (!doctor.specialties) {
      doctor.specialties = [];
    }

    return doctor.specialties;
  }
}
