const { app, BrowserWindow } = require('electron')
const { format } = require('url')
const { join } = require('path')

let mainWindow
const isDev = process.env.NODE_ENV === 'development'

const gotTheLock = app.requestSingleInstanceLock()

if (!gotTheLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })

  const startUrl = isDev
    ? 'http://localhost:3000'
    : format({
        pathname: join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
      })
  mainWindow.loadURL(startUrl)

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})
