const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
Menu.setApplicationMenu(false)
try {
	require('electron-reloader')(module);
} catch (_) {}

function createWindow () {
  const win = new BrowserWindow({
    alwaysOnTop: true,
    width: 480,
    height: 180,
    resizable:false,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, '/js/preload.js'),
      nodeIntegration: true
    }
  })
  
  if (process.platform === "linux") {
    win.icon = path.join(`${__dirname}/icon/icon.png`);
  }

  win.setMenuBarVisibility(false)
  win.loadFile('index.html')
  win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

app.on("ready", () => {
  if (process.platform === 'win32') {
    app.setAppUserModelId("com.erxn.spaceout");
  }
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
