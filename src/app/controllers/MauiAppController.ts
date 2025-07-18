

import { MauiAppService } from '../services/MauiAppService';
import { ContentPage } from '../components/ContentPage';
import { UIApplication } from '../utils/UIApplication';

class MauiAppController {
  private mauiAppService: MauiAppService;
  private contentPage: ContentPage;

  constructor(mauiAppService: MauiAppService, contentPage: ContentPage) {
    this.mauiAppService = mauiAppService;
    this.contentPage = contentPage;
  }

  InitializeComponent() {
    this.contentPage.InitializeComponent();
  }

  StartApplication(...args: any[]) {
    if (args.length === 0) {
      throw new Error('Required arguments for UIApplication.Main method are missing');
    }
    UIApplication.Main(...args);
  }

  initializeContentPage() {
    this.contentPage.title = 'Maui App';
    this.contentPage.layout = 'vertical';
  }

  async CreateMauiApp(request: any) {
    if (!request) {
      throw new Error('Request parameters for CreateMauiApp method are missing');
    }
    try {
      const response = await this.mauiAppService.CreateMauiApp(request);
      return response;
    } catch (error) {
      console.error('Error creating Maui app:', error);
      throw error;
    }
  }
}

export default MauiAppController;