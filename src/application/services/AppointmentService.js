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
    const doctorId = appointment.doctorId;
    const date = this.checkDate(appointment);

    this.doctorAvailabilityService.isDoctorAvailable(doctorId, date);

    this.appointmentRepository.add(appointment);

    this.notificationService.notifyAppointmentScheduled(appointment);

    return appointment;
  }

  findById(id) {
    const appointment = this.appointmentRepository.findById(id);
    if (!appointment) {
      throw new Error('Appointment not found.');
    }
    return appointment;
  }

  findAll() {
    return this.appointmentRepository.findAll();
  }

  checkDate(appointment) {
    const date =
    typeof appointment.date === 'string'
      ? new Date(appointment.date)
      : appointment.date;

    if (!(date instanceof Date) || isNaN(date.getTime())) {
      throw new Error('Invalid date.');
    }

    return date;
  }
}
