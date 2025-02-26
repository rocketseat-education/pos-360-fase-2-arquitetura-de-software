export class Allergy {
  constructor(type) {
    this.type = type;
  }

  equals(otherAllergy) {
    return this.type === otherAllergy.type;
  }
}
