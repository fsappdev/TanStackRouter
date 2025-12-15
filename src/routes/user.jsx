import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import { Container, Title, Card, Avatar, Text, Badge, Group, SimpleGrid } from '@mantine/core'

// Datos mockup de usuarios
// En una aplicación real, estos datos vendrían de una API
const mockUsers = [
    {
        id: 1,
        name: 'Ana García',
        email: 'ana.garcia@example.com',
        role: 'Administradora',
        status: 'Activo',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana'
    },
    {
        id: 2,
        name: 'Carlos Rodríguez',
        email: 'carlos.rodriguez@example.com',
        role: 'Desarrollador',
        status: 'Activo',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos'
    },
    {
        id: 3,
        name: 'María López',
        email: 'maria.lopez@example.com',
        role: 'Diseñadora',
        status: 'Inactivo',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria'
    },
    {
        id: 4,
        name: 'Juan Martínez',
        email: 'juan.martinez@example.com',
        role: 'Product Manager',
        status: 'Activo',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juan'
    },
]

// Componente para la página de usuarios
function UserComponent() {
    return (
        <Container size="xl">
        {/* Título de la página */}
        <Title order={1} mb="xl">
            Usuarios
        </Title>
        
        {/* SimpleGrid crea una cuadrícula responsive */}
        {/* En pantallas grandes muestra 2 columnas, en móviles 1 */}
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
            {/* Mapeamos cada usuario a una tarjeta */}
            {mockUsers.map((user) => (
            <Card key={user.id} shadow="sm" padding="lg" radius="md" withBorder>
                {/* Group alinea elementos horizontalmente */}
                <Group mb="md">
                {/* Avatar del usuario */}
                <Avatar src={user.avatar} size={60} radius="xl" />
                
                <div style={{ flex: 1 }}>
                    {/* Nombre del usuario */}
                    <Text fw={500} size="lg">
                    {user.name}
                    </Text>
                    
                    {/* Email del usuario */}
                    <Text size="sm" c="dimmed">
                    {user.email}
                    </Text>
                </div>
                
                {/* Badge para mostrar el estado */}
                <Badge color={user.status === 'Activo' ? 'green' : 'gray'}>
                    {user.status}
                </Badge>
                </Group>
                
                {/* Rol del usuario */}
                <Text size="sm" c="dimmed">
                <strong>Rol:</strong> {user.role}
                </Text>
            </Card>
            ))}
        </SimpleGrid>
        </Container>
    )
}

// Creamos la ruta para la página de usuarios
export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/user',
    component: UserComponent,
})