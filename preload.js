// interfaz
const{ipcRenderer, contextBridge} = require("electron")
//api
contextBridge.exposeInMainWorld(
    "comunication",
    {
        //enviando
        registroValido: (datos) => ipcRenderer.send("registroValido", datos),
        inicioCorrecto: (callback) => ipcRenderer.on("inicioCorrecto", callback)
    }

)