const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  win = new BrowserWindow( { width: 854, height: 600, minWidth: 854 } );

  win.loadURL(url.format({
    pathname: path.join(__dirname, '/build/index.html'),
    protocol: 'file',
    slashed: true
  }));

  //win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win == null) {
    createWindow();
  }
});