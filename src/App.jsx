import { MantineProvider, createTheme } from '@mantine/core'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Importamos todas las rutas de la aplicación
import { routeTree } from './routes/__root'

// Creamos el router con el árbol de rutas
// Este router manejará toda la navegación de la aplicación
const router = createRouter({ routeTree })

// Creamos el tema personalizado
// Aquí puedes personalizar colores, fuentes, espaciados, etc.
const theme = createTheme({
    // Color primario de la aplicación
    primaryColor: 'blue',
    
    // Configuración de fuentes
    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Greycliff CF, sans-serif' },
})

function App() {
    return (
        // MantineProvider proporciona el contexto de Mantine a toda la aplicación
        // Incluye el sistema de temas, estilos y componentes
        // defaultColorScheme establece el esquema de color inicial (light, dark, o auto)
        <MantineProvider theme={theme} defaultColorScheme="auto">
        {/* RouterProvider proporciona el contexto del router a toda la aplicación */}
        <RouterProvider router={router} />
        </MantineProvider>
    );
}

export default App