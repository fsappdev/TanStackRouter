import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import { Container, Title, Text, Paper, List, ThemeIcon, Stack } from '@mantine/core'
import { IconCheck, IconPalette } from '@tabler/icons-react'
import { PageAgent } from 'page-agent'

// Componente para la página de inicio
function IndexComponent() {
    const agent = new PageAgent({
        model: 'qwen3.5-plus',
        baseURL: 'https://page-ag-testing-ohftxirgbn.cn-shanghai.fcapp.run',
        apiKey: 'NA',
        language: 'es-AR'
    })

    /* no funciona el modo tool con lmstudio (o no se como se usa.) */
    const lmStudioIAServerAgent = new PageAgent({
        //model: 'Qwen3-Coder-30B-A3B-Instruct-UD-TQ1_0',
        model: 'qwen3/qwen3-8b',
        baseURL: 'http://172.21.240.1:1234/v1',
        apiKey: 'sk-lm-BmLz6juP:UsGfrmdotuWmhlnit7r8',
        language: 'es-AR'
    })
    
    const ollamaAgent = new PageAgent({
        model: 'qwen3.5:4b',
        baseURL: 'http://localhost:11434/v1',
        apiKey: 'NA',
        language: 'es-AR'
    })
    
    ollamaAgent.panel.show()
    //lmStudioIAServerAgent.panel.show()
    //agent.panel.show()
    

    return (
        <Container size="md">
        {/* Título principal de la página */}
        <Title order={1} mb="lg">
            Bienvenido a TanStack Router + Mantine
        </Title>
        
        {/* Paper es un contenedor con sombra y padding */}
        <Paper shadow="sm" p="xl" withBorder>
            <Stack spacing="md">
            <Text size="lg" fw={500}>
                Esta es una aplicación de ejemplo que demuestra:
            </Text>
            
            {/* Lista de características con iconos */}
            <List
                spacing="sm"
                size="sm"
                center
                icon={
                <ThemeIcon color="teal" size={24} radius="xl">
                    <IconCheck size={16} />
                </ThemeIcon>
                }
            >
                <List.Item>
                <strong>React + Vite:</strong> Desarrollo rápido con Hot Module Replacement
                </List.Item>
                <List.Item>
                <strong>TanStack Router:</strong> Enrutamiento type-safe y moderno
                </List.Item>
                <List.Item>
                <strong>Mantine:</strong> Biblioteca de componentes UI completa y accesible
                </List.Item>
                <List.Item>
                <ThemeIcon color="violet" size={24} radius="xl">
                    <IconPalette size={16} />
                </ThemeIcon>
                <strong>Modo Claro/Oscuro:</strong> Cambia entre temas con el botón en el header
                </List.Item>
            </List>
            
            <Text mt="md" c="dimmed">
                Usa el menú lateral para navegar entre las diferentes páginas.
            </Text>
            
            <Text size="sm" c="dimmed" fs="italic">
                💡 Tip: Haz clic en el icono de sol/luna en la esquina superior derecha para cambiar el tema.
            </Text>
            </Stack>
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