export class DoctorAvailabilityService {
  constructor(appointmentRepository, doctorService) {
    this.appointmentRepository = appointmentRepository;
    this.doctorService = doctorService;
  }

  isDoctorAvailable(doctorId, date) {
    const doctor = this.doctorService.findDoctorById(doctorId);
    if (!doctor) {
      throw new Error('Doctor not found');
    }

    if (!(date instanceof Date)) {
      throw new Error('Invalid date object.');
    }

    const hasAppointmentConflict = this.hasAppointmentConflict(doctorId, date);
    if (hasAppointmentConflict) {
      console.log("Doctor has a conflict appointment.")
      return false;
    }

    const isWithinWorkingHours = this.isWithinWorkingHours(doctor, date);
    if (!isWithinWorkingHours) {
      console.log("Doctor is not available at this time.")
      return false;
    }

    return true;
  }

  hasAppointmentConflict(doctorId, date) {
    const doctorAppointments = this.appointmentRepository.findByDoctorId(doctorId);
    return doctorAppointments.some(
      (appointment) => appointment.date.getTime() === date.getTime()
    )
  }

  isWithinWorkingHours(doctor, date) {
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const timeSlot = date.toLocaleTimeString('en-US', {
      hours: '2-digit',
      minutes: '2-digit',
    });

    return doctor.workingHours.hours.some(
      (workingHours) =>
        workingHours.day === dayOfWeek &&
        this.isTimeWithinSlot(timeSlot, workingHours.timeSlot)
    )
  }

  isTimeWithinSlot(time, timeSlot) {
    const [startTime, endTime] = timeSlot.split(' - ');

    const timeToMinutes = (time) => {
      const [hour, minute] = time.split(/:| /).map(Number);
      const period = time.includes('PM') && hour !== 12 ? 12 : 0;
      return (hour + period) * 60 + minute;
    }

    const timeInMinutes = timeToMinutes(time);
    const startInMinutes = timeToMinutes(startTime);
    const endInMinutes = timeToMinutes(endTime);

    return timeInMinutes >= startInMinutes && timeInMinutes <= endInMinutes;
  }
}
