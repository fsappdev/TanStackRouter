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
} from '@mantine/core'
import { IconUserPlus } from '@tabler/icons-react'

// Componente para la página de nuevo usuario
function NewUserComponent() {
  return (
    <Container size="md">
      {/* Título de la página con icono */}
      <Group mb="xl">
        <IconUserPlus size={32} />
        <Title order={1}>Nuevo Usuario</Title>
      </Group>

      {/* Formulario para crear un nuevo usuario */}
      <Paper shadow="sm" p="xl" withBorder>
        <Stack spacing="md">
          <Title order={3} mb="sm">
            Información del Usuario
          </Title>

          {/* Campo de nombre */}
          <TextInput
            label="Nombre Completo"
            placeholder="Ej: Juan Pérez"
            required
            withAsterisk
          />

          {/* Campo de email */}
          <TextInput
            label="Email"
            placeholder="usuario@example.com"
            type="email"
            required
            withAsterisk
          />

          {/* Campo de teléfono */}
          <TextInput
            label="Teléfono"
            placeholder="+34 612 345 678"
          />

          {/* Selector de rol */}
          <Select
            label="Rol"
            placeholder="Selecciona un rol"
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
            minRows={3}
          />

          {/* Botones de acción */}
          <Group justify="flex-end" mt="md">
            <Button variant="default">Cancelar</Button>
            <Button leftSection={<IconUserPlus size={18} />}>
              Crear Usuario
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  )
}

// Creamos la ruta para la página de nuevo usuario
export const Route = createRoute({
  getParentRoute: () => RootRoute,
  path: '/newuser',
  component: NewUserComponent,
})