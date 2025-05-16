const { app, BrowserWindow } = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
  },
  icon: './src/assets/icon.png'
  })

  win.loadFile('./src/pages/index.html')
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })


