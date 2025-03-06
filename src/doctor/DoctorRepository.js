import { Repository } from "../shared/Repository.js";

export class DoctorRepository extends Repository {
  constructor() {
    super()
  }

  findByName(name) {
    return this.findAll().filter(doctor => doctor.name === name);
  }

  findBySpecialty(specialty) {
    return this.findAll().filter((doctor) =>
      doctor.specialties.includes(specialty)
    );
  }
}
