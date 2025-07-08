

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

public static void Main(string[] args) {
  UIApplication.Main(args, null, "AppDelegate");
}

public static void App() {
  const mauiApp = new MauiApp();
  mauiApp.width = 800;
  mauiApp.height = 600;
  mauiApp.backgroundColor = "#F7F7F7";
  mauiApp.fontFamily = "Segoe UI";
  mauiApp.fontSize = 14;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);