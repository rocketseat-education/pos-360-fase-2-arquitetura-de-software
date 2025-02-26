class WorkingHours {
  constructor() {
    this.hours = [];
  }

  addHours(day, timeSlot) {
    this.hours.push({ day, timeSlot });
  }

  removeHours(day, timeSlot) {
    this.hours = this.hours.filter((hour) => hour.day !== day && hour.timeSlot !== timeSlot);
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

  listHours() {
    return this.hours;
  }
}

module.exports = WorkingHours;
