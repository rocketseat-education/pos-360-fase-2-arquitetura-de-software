import { Repository } from "../shared/Repository.js";

export class ExamRepository extends Repository {
  constructor() {
    super();
  }

  findByPatientId(patientId) {
    return this.findAll().filter((exam) => exam.patient.id === patientId);
  }

  findByType(type) {
    return this.findAll().filter((exam) => exam.type === type);
  }

  findByDate(date) {
    return this.findAll().filter((exam) => exam.date === date);
  }
}
