

import { MauiProgramService } from '../services/MauiProgramService';

class CreateMauiAppController {
  private mauiProgramService: MauiProgramService;

  constructor(mauiProgramService: MauiProgramService) {
    this.mauiProgramService = mauiProgramService;
  }

  async createMauiApp() {
    return await this.mauiProgramService.createMauiApp();
  }
}

export default CreateMauiAppController;