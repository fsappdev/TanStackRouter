import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import { Container, Title, Paper, Avatar, Text, Group, Stack, Divider, Badge } from '@mantine/core'

// Datos mockup del perfil del usuario actual
// En una aplicación real, estos datos vendrían de la sesión del usuario
const mockProfile = {
    name: 'Ana García',
    email: 'ana.garcia@example.com',
    phone: '+34 612 345 678',
    role: 'Administradora',
    department: 'Tecnología',
    joinDate: '15 de Enero, 2023',
    location: 'Madrid, España',
    bio: 'Apasionada por la tecnología y el desarrollo de software. Me encanta crear experiencias de usuario excepcionales.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    skills: ['React', 'TypeScript', 'Node.js', 'UI/UX', 'Gestión de Proyectos']
}

// Componente para la página de perfil
function ProfileComponent() {
    return (
        <Container size="md">
        {/* Título de la página */}
        <Title order={1} mb="xl">
            Mi Perfil
        </Title>
        
        {/* Paper es un contenedor con sombra y bordes */}
        <Paper shadow="md" p="xl" radius="md" withBorder>
            {/* Stack apila elementos verticalmente con espaciado */}
            <Stack spacing="lg">
            {/* Sección del avatar y nombre */}
            <Group>
                {/* Avatar grande del usuario */}
                <Avatar src={mockProfile.avatar} size={120} radius="xl" />
                
                <div>
                {/* Nombre del usuario */}
                <Title order={2}>{mockProfile.name}</Title>
                
                {/* Rol del usuario */}
                <Text size="lg" c="dimmed">
                    {mockProfile.role}
                </Text>
                
                {/* Badge con el departamento */}
                <Badge size="lg" mt="xs">
                    {mockProfile.department}
                </Badge>
                </div>
            </Group>
            
            {/* Línea divisoria */}
            <Divider />
            
            {/* Biografía */}
            <div>
                <Text fw={500} size="sm" mb="xs">
                Biografía
                </Text>
                <Text size="sm" c="dimmed">
                {mockProfile.bio}
                </Text>
            </div>
            
            {/* Información de contacto */}
            <div>
                <Text fw={500} size="sm" mb="xs">
                Información de Contacto
                </Text>
                <Text size="sm">
                <strong>Email:</strong> {mockProfile.email}
                </Text>
                <Text size="sm">
                <strong>Teléfono:</strong> {mockProfile.phone}
                </Text>
                <Text size="sm">
                <strong>Ubicación:</strong> {mockProfile.location}
                </Text>
            </div>
            
            {/* Habilidades */}
            <div>
                <Text fw={500} size="sm" mb="xs">
                Habilidades
                </Text>
                <Group spacing="xs">
                {/* Mapeamos cada habilidad a un Badge */}
                {mockProfile.skills.map((skill) => (
                    <Badge key={skill} variant="light">
                    {skill}
                    </Badge>
                ))}
                </Group>
            </div>
            
            <Divider />
            
            {/* Fecha de ingreso */}
            <Text size="sm" c="dimmed">
                <strong>Miembro desde:</strong> {mockProfile.joinDate}
            </Text>
            </Stack>
        </Paper>
        </Container>
    )
}

// Creamos la ruta para la página de perfil
export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/profile',
    component: ProfileComponent,
})