export class WorkingHours {
  constructor() {
    this.hours = [];
  }

  equals(otherWorkingHours) {
    if (this.hours.length !== otherWorkingHours.hours.length) {
      return false;
    }

    return this.hours.every((hour, index) => {
      const other = otherWorkingHours.hours[index];
      return hour.day === other.day && hour.timeSlot === other.timeSlot;
    })
  }
}
