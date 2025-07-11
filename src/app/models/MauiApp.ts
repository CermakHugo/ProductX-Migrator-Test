

import { CreateMauiApp } from '../services/MauiAppService';

class MauiApp {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(createMauiApp: CreateMauiApp) {
    this.id = createMauiApp.id;
    this.name = createMauiApp.name;
    this.description = createMauiApp.description;
    this.createdAt = createMauiApp.createdAt;
    this.updatedAt = createMauiApp.updatedAt;
  }
}