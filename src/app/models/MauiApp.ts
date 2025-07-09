

class MauiApp {
  name: string;
  description: string;

  constructor(name: string, description: string) {
    if (typeof name !== 'string' || typeof description !== 'string') {
      throw new Error('Name and description must be strings');
    }
    this.name = name;
    this.description = description;
  }
}