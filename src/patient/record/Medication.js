export class Medication {
  constructor(name, dosage) {
    this.name = name;
    this.dosage = dosage;
  }

  equals(otherMedication) {
    return (
      this.name === otherMedication.name &&
      this.dosage === otherMedication.dosage
    );
  }
}
