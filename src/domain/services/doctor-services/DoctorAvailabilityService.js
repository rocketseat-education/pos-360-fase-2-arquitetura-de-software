export class DoctorAvailabilityService {
  constructor(appointmentRepository, doctorService, doctorWorkingHoursService) {
    this.appointmentRepository = appointmentRepository;
    this.doctorService = doctorService;
    this.doctorWorkingHoursService = doctorWorkingHoursService;
  }

  isDoctorAvailable(doctorId, date) {
    if (!doctorId || !date) {
      throw new Error('Invalid doctor ID or date.');
    }

    const adjustedDate = this.checkDate(date);

    const hasAppointmentConflict = this.hasAppointmentConflict(doctorId, date);
    const workingHours = this.doctorWorkingHoursService.getWorkingHours(doctorId);

    if (!workingHours) {
      throw new Error('Working hours not found for the doctor.');
    }

    const isWithinWorkingHours = this.doctorWorkingHoursService.isWithinWorkingHours(
      workingHours,
      adjustedDate
    );

    if (hasAppointmentConflict || !isWithinWorkingHours) {
      throw new Error("Doctor is not available at the specified date and time.");
    }

    return true;
  }

  hasAppointmentConflict(doctorId, date) {
    const doctorAppointments = this.appointmentRepository.findByDoctorId(doctorId);
    return doctorAppointments.some((appointment) => {
      const appointmentDate = this.checkDate(appointment.date);
      return appointmentDate.getTime() === date.getTime();
    })
  }

  checkDate(date) {
    const parsedDate = new Date(date);
    if (!(parsedDate instanceof Date) || isNaN(parsedDate.getTime())) {
      throw new Error('Invalid date.');
    }

    const offset = parsedDate.getTimezoneOffset() * 60000;
    return new Date(parsedDate.getTime() - offset);
  }
}
