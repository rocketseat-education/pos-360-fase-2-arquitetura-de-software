import { Repository } from "../shared/Repository.js";

export class PatientRepository extends Repository {
  constructor() {
    super();
  }

  findByName(name) {
    return this.findAll().filter(patient => patient.name === name);
  }

  findByBloodType(bloodType) {
    return this.findAll().filter(patient => patient.bloodType === bloodType);
  }
}
