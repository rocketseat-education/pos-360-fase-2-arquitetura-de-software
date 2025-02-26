export class Repository {
  constructor() {
    this.data = new Map();
  }

  add(id, entity) {
    if (this.data.has(id)) {
      throw new Error('Entity already exists.');
    }
    this.data.set(id, entity);
  }

  findById(id) {
    return this.data.get(id);
  }

  findAll() {
    return Array.from(this.data.values());
  }

  update(id, entity) {
    if (!this.data.has(id)) {
      throw new Error('Entity not found.');
    }
    this.data.set(id, entity);
  }

  delete(id) {
    if (!this.data.has(id)) {
      throw new Error('Entity not found.');
    }
    this.data.delete(id);
  }
}
