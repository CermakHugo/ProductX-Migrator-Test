

import MauiProgramService from '../services/MauiProgramService';

class MauiAppCreator {
  constructor() {
    this.mauiProgramService = new MauiProgramService();
  }

  CreateMauiApp() {
    return this.mauiProgramService.CreateMauiApp();
  }
}

export default MauiAppCreator;