

import { MauiAppController } from './MauiAppController';
import { ProgramService } from './ProgramService';
import { MainController } from './MainController';

const App = () => {
  const args = [];
  const mainController = new MainController();
  mainController.Main(args);

  const mauiAppController = new MauiAppController();
  mauiAppController.CreateMauiApp();

  const programService = new ProgramService();
  programService.Run();
};

export default App;