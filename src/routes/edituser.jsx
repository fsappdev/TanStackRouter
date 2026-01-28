import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import {
  Container,
  Title,
  Paper,
  TextInput,
  Select,
  Button,
  Stack,
  Group,
  Textarea,
  Avatar,
  Badge,
} from '@mantine/core'
import { IconUserEdit, IconDeviceFloppy } from '@tabler/icons-react'

// Datos mockup del usuario a editar
// En una aplicación real, estos datos vendrían de una API o estado global
const mockUserToEdit = {
  id: 1,
  name: 'Ana García',
  email: 'ana.garcia@example.com',
  phone: '+34 612 345 678',
  role: 'admin',
  department: 'tech',
  bio: 'Apasionada por la tecnología y el desarrollo de software.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
  status: 'Activo',
}

// Componente para la página de editar usuario
function EditUserComponent() {
  return (
    <Container size="md">
      {/* Título de la página con icono */}
      <Group mb="xl">
        <IconUserEdit size={32} />
        <Title order={1}>Editar Usuario</Title>
      </Group>

      {/* Formulario para editar usuario */}
      <Paper shadow="sm" p="xl" withBorder>
        <Stack spacing="md">
          {/* Información del usuario actual */}
          <Group mb="md">
            <Avatar src={mockUserToEdit.avatar} size={80} radius="xl" />
            <div>
              <Title order={3}>{mockUserToEdit.name}</Title>
              <Badge color="green" mt="xs">
                {mockUserToEdit.status}
              </Badge>
            </div>
          </Group>

          <Title order={4} mb="sm">
            Información del Usuario
          </Title>

          {/* Campo de nombre */}
          <TextInput
            label="Nombre Completo"
            placeholder="Ej: Juan Pérez"
            defaultValue={mockUserToEdit.name}
            required
            withAsterisk
          />

          {/* Campo de email */}
          <TextInput
            label="Email"
            placeholder="usuario@example.com"
            type="email"
            defaultValue={mockUserToEdit.email}
            required
            withAsterisk
          />

          {/* Campo de teléfono */}
          <TextInput
            label="Teléfono"
            placeholder="+34 612 345 678"
            defaultValue={mockUserToEdit.phone}
          />

          {/* Selector de rol */}
          <Select
            label="Rol"
            placeholder="Selecciona un rol"
            defaultValue={mockUserToEdit.role}
            data={[
              { value: 'admin', label: 'Administrador' },
              { value: 'developer', label: 'Desarrollador' },
              { value: 'designer', label: 'Diseñador' },
              { value: 'manager', label: 'Product Manager' },
            ]}
            required
            withAsterisk
          />

          {/* Selector de departamento */}
          <Select
            label="Departamento"
            placeholder="Selecciona un departamento"
            defaultValue={mockUserToEdit.department}
            data={[
              { value: 'tech', label: 'Tecnología' },
              { value: 'design', label: 'Diseño' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'sales', label: 'Ventas' },
            ]}
            required
            withAsterisk
          />

          {/* Campo de biografía */}
          <Textarea
            label="Biografía"
            placeholder="Escribe una breve descripción del usuario..."
            defaultValue={mockUserToEdit.bio}
            minRows={3}
          />

          {/* Botones de acción */}
          <Group justify="flex-end" mt="md">
            <Button variant="default">Cancelar</Button>
            <Button leftSection={<IconDeviceFloppy size={18} />}>
              Guardar Cambios
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  )
}

// Creamos la ruta para la página de editar usuario
export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/edituser',
  component: EditUserComponent,
})