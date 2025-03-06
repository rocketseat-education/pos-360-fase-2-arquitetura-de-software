export class NotificationService {
  sendEmailNotification(email, message) {
    console.log(`Sending email to ${email}: ${message}`);
  }

  notifyAppointmentScheduled(appointment) {
    const patientMessage = `Your appointment with Dr. ${appointment.doctor.name} is scheduled for ${appointment.date}.`;
    this.sendEmailNotification(appointment.patient.email, patientMessage);
  }
}
