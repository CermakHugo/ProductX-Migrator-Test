

import MauiProgram from './MauiProgram';

class MauiProgramService {
  async createMauiApp() {
    try {
      return await MauiProgram.CreateMauiApp();
    } catch (error) {
      console.error('Error creating Maui app:', error);
      throw error;
    }
  }
}

export default MauiProgramService;