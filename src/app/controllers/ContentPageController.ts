

import { Request, Response } from 'express';
import LayoutService from '../services/LayoutService';

class ContentPageController {
  private layoutService: LayoutService;

  constructor() {
    this.layoutService = new LayoutService();
  }

  public async configureContentPage(req: Request, res: Response): Promise<Response> {
    const configurationParams = req.body;
    const layout = await this.layoutService.applyCustomizations(configurationParams);
    return res.json(layout);
  }
}

class GetContentPageLayoutController {
  private layoutService: LayoutService;

  constructor() {
    this.layoutService = new LayoutService();
  }

  public async getContentPageLayout(req: Request, res: Response): Promise<Response> {
    const layoutParams = req.body;
    const layout = await this.layoutService.getLayout(layoutParams);
    return res.json(layout);
  }
}

export { ContentPageController, GetContentPageLayoutController };