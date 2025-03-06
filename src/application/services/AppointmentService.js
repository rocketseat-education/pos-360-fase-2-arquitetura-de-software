export class AppointmentService {
  constructor(
    patientService,
    doctorService,
    appointmentRepository,
    doctorAvailabilityService,
    notificationService,
  ) {
    this.patientService = patientService;
    this.doctorService = doctorService;
    this.appointmentRepository = appointmentRepository;
    this.doctorAvailabilityService = doctorAvailabilityService;
    this.notificationService = notificationService;
  }

  execute(appointment) {
    const date =
      typeof appointment.date === 'string'
        ? new Date(appointment.date)
        : appointment.date;

    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date.');
    }

    const patientId = appointment.patient.id;
    const doctorId = appointment.doctor.id;

    const patient = this.patientService.findPatientById(patientId);
    const doctor = this.doctorService.findDoctorById(doctorId);

    if (!patient) {
      throw new Error('Patient not found.');
    }

    if (!doctor) {
      throw new Error('Doctor not found.');
    }

    const isDoctorAvailable = this.doctorAvailabilityService.isDoctorAvailable(
      doctorId,
      date
    );

    if (!isDoctorAvailable) {
      throw new Error("Doctor is not available at the specified date and time.");
    }

    this.appointmentRepository.add(appointment.id, appointment);
    this.notificationService.notifyAppointmentScheduled(appointment);
    return appointment;
  }
}
