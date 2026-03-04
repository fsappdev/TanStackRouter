import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import {
  Container,
  Title,
  Card,
  Text,
  Badge,
  Group,
  SimpleGrid,
  Switch,
  Stack,
} from '@mantine/core'
import {
  IconApps,
  IconDashboard,
  IconUsers,
  IconSettings,
  IconChartBar,
  IconMail,
  IconCalendar,
  IconFileText,
} from '@tabler/icons-react'

// Datos mockup de módulos disponibles
// En una aplicación real, estos datos vendrían de una API
const mockModules = [
  {
    id: 1,
    name: 'Dashboard',
    description: 'Panel principal con estadísticas y métricas',
    icon: IconDashboard,
    enabled: true,
    category: 'Principal',
  },
  {
    id: 2,
    name: 'Gestión de Usuarios',
    description: 'Administración completa de usuarios del sistema',
    icon: IconUsers,
    enabled: true,
    category: 'Administración',
  },
  {
    id: 3,
    name: 'Configuración',
    description: 'Configuración general del sistema',
    icon: IconSettings,
    enabled: true,
    category: 'Sistema',
  },
  {
    id: 4,
    name: 'Reportes',
    description: 'Generación y visualización de reportes',
    icon: IconChartBar,
    enabled: false,
    category: 'Análisis',
  },
  {
    id: 5,
    name: 'Mensajería',
    description: 'Sistema de mensajería interna',
    icon: IconMail,
    enabled: true,
    category: 'Comunicación',
  },
  {
    id: 6,
    name: 'Calendario',
    description: 'Gestión de eventos y calendario',
    icon: IconCalendar,
    enabled: false,
    category: 'Productividad',
  },
  {
    id: 7,
    name: 'Documentos',
    description: 'Gestión de documentos y archivos',
    icon: IconFileText,
    enabled: true,
    category: 'Archivos',
  },
  {
    id: 8,
    name: 'Aplicaciones',
    description: 'Gestión de aplicaciones integradas',
    icon: IconApps,
    enabled: false,
    category: 'Integraciones',
  },
]

// Componente para la página de módulos disponibles
function UsersModulesComponent() {
  return (
    <Container size="xl">
      {/* Título de la página con icono */}
      <Group mb="xl">
        <IconApps size={32} />
        <div>
          <Title order={1}>Módulos Disponibles</Title>
          <Text size="sm" c="dimmed">
            Gestiona los módulos y permisos disponibles para los usuarios
          </Text>
        </div>
      </Group>

      {/* Grid de módulos */}
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
        {mockModules.map((module) => {
          const IconComponent = module.icon
          return (
            <Card key={module.id} shadow="sm" padding="lg" radius="md" withBorder>
              <Stack spacing="md">
                {/* Encabezado del módulo */}
                <Group justify="space-between">
                  <Group>
                    <IconComponent size={28} stroke={1.5} />
                    <div>
                      <Text fw={500} size="lg">
                        {module.name}
                      </Text>
                      <Badge size="sm" variant="light">
                        {module.category}
                      </Badge>
                    </div>
                  </Group>
                </Group>

                {/* Descripción del módulo */}
                <Text size="sm" c="dimmed">
                  {module.description}
                </Text>

                {/* Switch para habilitar/deshabilitar */}
                <Group justify="space-between" mt="auto">
                  <Text size="sm" fw={500}>
                    Estado:
                  </Text>
                  <Switch
                    defaultChecked={module.enabled}
                    label={module.enabled ? 'Habilitado' : 'Deshabilitado'}
                    color={module.enabled ? 'green' : 'gray'}
                  />
                </Group>
              </Stack>
            </Card>
          )
        })}
      </SimpleGrid>
    </Container>
  )
}

// Creamos la ruta para la página de módulos disponibles
export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/usersmodules',
  component: UsersModulesComponent,
})