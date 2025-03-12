import { WorkingHours } from "../value-objects/WorkingHours.js";

export class Doctor {
  constructor(id,
    rcm,
    name,
    specialties = [],
    phone,
    workingHours = new WorkingHours()
  ) {
    this.id = id;
    this.rcm = rcm;
    this.name = name;
    this.specialties = specialties;
    this.phone = phone;
    this.workingHours = workingHours;
  }
}
