import { MantineProvider } from '@mantine/core'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { theme } from './theme'

// Importamos todas las rutas de la aplicación
import { routeTree } from './routes/__root'

// Creamos el router con el árbol de rutas
// Este router manejará toda la navegación de la aplicación
const router = createRouter({ routeTree })

function App() {
    return (
        // MantineProvider proporciona el contexto de Mantine a toda la aplicación
        // Incluye el sistema de temas, estilos y componentes
        <MantineProvider theme={theme}>
        {/* RouterProvider proporciona el contexto del router a toda la aplicación */}
        <RouterProvider router={router} />
        </MantineProvider>
    )
}

export default App