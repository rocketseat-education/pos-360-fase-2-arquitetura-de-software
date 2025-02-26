export class Treatment {
  constructor(description) {
    this.description = description;
  }

  equals(otherTreatment) {
    return this.description === otherTreatment.description;
  }
}
