export class Diagnosis {
  constructor(description) {
    this.description = description;
  }

  equals(otherDiagnosis) {
    return this.description === otherDiagnosis.description;
  }
}
