import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importamos los estilos base de Mantine
import '@mantine/core/styles.css'

// Punto de entrada de la aplicación
// Renderizamos el componente App dentro del elemento con id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)