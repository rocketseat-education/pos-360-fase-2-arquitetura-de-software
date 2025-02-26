class Patient {
  constructor(
    id,
    identificationDocument,
    name,
    birthDate,
    gender,
    bloodType,
    address,
    phone,
    email,
    emergencyContact,
  ) {
    this.id = id;
    this.identificationDocument = identificationDocument;
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.bloodType = bloodType;
    this.allergies = [];
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.emergencyContact = emergencyContact;
    this.appointments = [];
    this.exams = [];
    this.medicalRecord = new MedicalRecord();
  }

  addAllergy(type) {
    const allergy = new Allergy(type);
    this.allergies.push(allergy);
    console.log(`Allergy ${allergy} added to patient ${this.name}.`);
  }

  addDiagnosis(description) {
    const diagnosis = new Diagnosis(description);
    this.medicalRecord.addDiagnosis(diagnosis);
    console.log(`Diagnosis added to the medical record of patient ${this.name}.`);
  }

  addExam(exam) {
    this.exams.push(exam);
    console.log(`Exam ${exam.type} added with result: ${exam.result}`);
  }

  addMedication(name, dosage) {
    const medication = new Medication(name, dosage);
    this.medicalRecord.addMedication(medication);
    console.log(`Medication added to the medical record of patient ${this.name}.`);
  }

  addTreatment(description) {
    const treatment = new Treatment(description);
    this.medicalRecord.addTreatment(treatment);
    console.log(`Treatment added to the medical record of patient ${this.name}.`);
  }

  scheduleAppointment(appointment) {
    const hasAppointmentAtSameTime = this.appointments.some(
      (a) => a.date.getTime() === appointment.date.getTime(),
    );

    if (hasAppointmentAtSameTime) {
      throw new Error('Patient already has an appointment schedule for this time.');
    }

    this.appointments.push(appointment);
    console.log(
      `Appointment scheduled for ${appointment.date} with ${appointment.doctor.name}`,
    );
  }
}

module.exports = Paciente;
