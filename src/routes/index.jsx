import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import { Container, Title, Text, Paper, List } from '@mantine/core'

// Componente para la página de inicio
function IndexComponent() {
    return (
        <Container size="md">
        {/* Título principal de la página */}
        <Title order={1} mb="lg">
            Bienvenido a TanStack Router + Mantine
        </Title>
        
        {/* Paper es un contenedor con sombra y padding */}
        <Paper shadow="sm" p="xl" withBorder>
            <Text size="lg" mb="md">
            Esta es una aplicación de ejemplo que demuestra:
            </Text>
            
            {/* Lista de características */}
            <List spacing="sm">
            <List.Item>
                <strong>React + Vite:</strong> Desarrollo rápido con Hot Module Replacement
            </List.Item>
            <List.Item>
                <strong>TanStack Router:</strong> Enrutamiento type-safe y moderno
            </List.Item>
            <List.Item>
                <strong>Mantine:</strong> Biblioteca de componentes UI completa y accesible
            </List.Item>
            </List>
            
            <Text mt="md" c="dimmed">
            Usa el menú lateral para navegar entre las diferentes páginas.
            </Text>
        </Paper>
        </Container>
    )
}

// Creamos la ruta para la página de inicio
// El path '/' indica que esta es la ruta raíz
export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/',
    component: IndexComponent,
})