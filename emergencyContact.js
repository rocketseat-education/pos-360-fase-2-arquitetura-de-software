class EmergencyContact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  equals(otherContact) {
    return this.name === otherContact.name && this.phone === otherContact.phone;
  }
}

module.exports = EmergencyContact;
