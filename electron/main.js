import { app, BrowserWindow, nativeTheme } from 'electron';

function createWindow (){
    nativeTheme.themeSource = 'dark';
    const win = new BrowserWindow({
        width: 400,
        height: 660,
        icon: './icons/icons_gato.png',
        resizable: false,
        autoHideMenuBar: true
    });
    const { width, height } = win.getBounds();

    if( width <= 400 && height <= 660){
        win.loadURL('http://localhost:5173');
    } else {
        win.loadFile('./expand/index.html');
    }
}

app.whenReady().then( () => {
    createWindow();
})

// cd aprendendo1/electron/compact - npm run dev
// cd aprendendo1/electron - npm start 

// Tem que rodar o servidor com compact primeiro  