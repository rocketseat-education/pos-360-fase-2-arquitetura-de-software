import { Diagnosis } from './Diagnosis.js';
import { Treatment } from './Treatment.js';
import { Medication } from './Medication.js';

export class MedicalRecord {
  constructor() {
    this.diagnoses = [];
    this.treatments = [];
    this.medications = [];
  }

  addDiagnosis(diagnosis) {
    if (!(diagnosis instanceof Diagnosis)) {
      throw new Error('Invalid diagnosis object.');
    }
    this.diagnoses.push(diagnosis);
  }

  addTreatment(treatment) {
    if (!(treatment instanceof Treatment)) {
      throw new Error('Invalid treatment object.');
    }
    this.treatments.push(treatment);
  }

  addMedication(medication) {
    if (!(medication instanceof Medication)) {
      throw new Error('Invalid medication object.');
    }
    this.medications.push(medication);
  }

  equals(otherRecord) {
    return (
      this.diagnoses.length === otherRecord.diagnoses.length &&
      this.treatments.length === otherRecord.treatments.length &&
      this.medications.length === otherRecord.medications.length &&
      this.diagnoses.every((d, i) => d.equals(otherRecord.diagnoses[i])) &&
      this.treatments.every((t, i) => t.equals(otherRecord.treatments[i])) &&
      this.medications.every((m, i) => m.equals(otherRecord.medications[i]))
    )
  }
}
