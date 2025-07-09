

import { UIApplication } from '../UIApplication';
import AppDelegate from '../AppDelegate';

const Main = (args: string[]) => {
  UIApplication.Main(args, null, typeof(AppDelegate));
}

export default Main;