const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'Orbit',
    titleBarStyle: 'hidden'
  })
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  )
  mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', () => {
  createWindow()
  const menu = Menu.buildFromTemplate(buildMenuTemplate())
  Menu.setApplicationMenu(menu)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

function buildMenuTemplate() {
  return [
    {
      label: 'Orbit',
      submenu: [
        {
          label: 'Quit Orbit',
          click: () => app.quit()
        }
      ]
    }
  ]
}
