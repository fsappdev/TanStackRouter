import { useState } from 'react'
import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Title,
  ActionIcon,
  Tooltip,
  useMantineColorScheme,
  useComputedColorScheme,
  Stack, Divider, MenuDivider
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  IconUser,
  IconUserCircle,
  IconNews,
  IconSun,
  IconMoon,
  IconHome,
  IconSteeringWheel,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarRightExpand,
} from '@tabler/icons-react'

// Componente raíz que envuelve todas las rutas
// Aquí definimos el layout principal de la aplicación
function RootComponent() {
  // Hook para manejar el estado de apertura/cierre del menú móvil (burger del header)
  const [opened, { toggle }] = useDisclosure()

  // Estado para manejar el "collapse" de la barra lateral (ancho completo vs sólo iconos)
  const [navbarCollapsed, setNavbarCollapsed] = useState(false)

  // Hook para cambiar el esquema de color (light/dark)
  const { setColorScheme } = useMantineColorScheme()

  // Hook para obtener el esquema de color actual computado
  // Esto resuelve 'auto' al valor real (light o dark)
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  // Función para alternar entre modo claro y oscuro
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
  }

  // Función para alternar el estado de colapso del navbar
  const toggleNavbarCollapsed = () => {
    setNavbarCollapsed((prev) => !prev)
  }

  return (
    // AppShell es el componente de layout principal de Mantine
    // Proporciona header, navbar, y área de contenido
    <AppShell
      header={{ height: 60 }}
      navbar={{
        // Cambiamos el ancho según el estado de "collapse"
        width: navbarCollapsed ? 80 : 250,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* Header - Barra superior de la aplicación */}
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            {/* Botón hamburguesa para móviles */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />

            {/* Icono de inicio que redirige a la página principal */}
            <Tooltip label="Ir al inicio">
              <ActionIcon
                component={Link}
                to="/"
                variant="subtle"
                size="lg"
                aria-label="Ir al inicio"
              >
                <IconHome size={24} />
              </ActionIcon>
            </Tooltip>

            {/* Título de la aplicación */}
            <Title order={3}>TanStack Router + Mantine</Title>
          </Group>

          {/* Botón para cambiar entre modo claro y oscuro */}
          <Tooltip
            label={computedColorScheme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
          >
            <ActionIcon
              onClick={toggleColorScheme}
              variant="default"
              size="lg"
              aria-label="Cambiar tema"
            >
              {/* Mostramos el icono del sol en modo oscuro y la luna en modo claro */}
              {computedColorScheme === 'dark' ? (
                <IconSun size={20} />
              ) : (
                <IconMoon size={20} />
              )}
            </ActionIcon>
          </Tooltip>
        </Group>
      </AppShell.Header>

      {/* Navbar - Menú lateral de navegación */}
      <AppShell.Navbar p={navbarCollapsed ? 'sm' : 'md'}>
        {/* Encabezado del navbar: título "Navegación" o icono según esté colapsado */}
        <Group
            /* cambiar el background color del grupo a un color gris claro y el borde redondeado con un radio de 10px  y un padding de 10px y un margin bottom de 10px */        
          style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '10px', marginBottom: '10px' }}
          mb="md"
          justify={navbarCollapsed ? 'center' : 'space-between'}
          gap="xs"
        >
          {/* Si está colapsado, mostramos solo el icono del timón */}
          {navbarCollapsed ? null /* (
            <Tooltip label="Navegación">
              <ActionIcon variant="subtle" aria-label="Navegación">
                <IconSteeringWheel size={22} />
              </ActionIcon>
            </Tooltip>
          ) */ : (
            <Group gap="xs">
              <IconSteeringWheel size={20} />
              <Title order={4}>Navegación</Title>
            </Group>
          )}

          {/* Botón para colapsar/expandir la barra lateral */}
          <Tooltip
            label={
              navbarCollapsed ? 'Expandir barra de navegación' : 'Colapsar barra de navegación'
            }
          >
            <ActionIcon
              variant="default"
              size="sm"
              onClick={toggleNavbarCollapsed}
              aria-label={
                navbarCollapsed ? 'Expandir barra de navegación' : 'Colapsar barra de navegación'
              }
            >
              {navbarCollapsed ? (
                <IconLayoutSidebarRightExpand size={18} />
              ) : (
                <IconLayoutSidebarLeftCollapse size={18} />
              )}
            </ActionIcon>
          </Tooltip>
        </Group>
        
        <Divider />
        {/* Links de navegación */}
        {/* Usamos Stack para apilar los elementos verticalmente */}
        <Stack gap="xs">
          {/* Link a la página de inicio */}
          <Tooltip
            // Tooltip visible sobre todo cuando la barra está colapsada
            label="Inicio"
            position="right"
            disabled={!navbarCollapsed}
          >
            <NavLink
              component={Link}
              to="/"
              label={navbarCollapsed ? null : 'Inicio'}
              leftSection={<IconHome size={20} />}
              onClick={() => opened && toggle()}
            />
          </Tooltip>

          {/* Link a la página de usuarios */}
          <Tooltip
            label="Usuarios"
            position="right"
            disabled={!navbarCollapsed}
          >
            <NavLink
              component={Link}
              to="/user"
              label={navbarCollapsed ? null : 'Usuarios'}
              leftSection={<IconUser size={20} />}
              onClick={() => opened && toggle()}
            />
          </Tooltip>

          {/* Link a la página de perfil */}
          <Tooltip
            label="Perfil"
            position="right"
            disabled={!navbarCollapsed}
          >
            <NavLink
              component={Link}
              to="/profile"
              label={navbarCollapsed ? null : 'Perfil'}
              leftSection={<IconUserCircle size={20} />}
              onClick={() => opened && toggle()}
            />
          </Tooltip>

          {/* Link a la página de noticias */}
          <Tooltip
            label="Noticias"
            position="right"
            disabled={!navbarCollapsed}
          >
            <NavLink
              component={Link}
              to="/news"
              label={navbarCollapsed ? null : 'Noticias'}
              leftSection={<IconNews size={20} />}
              onClick={() => opened && toggle()}
            />
          </Tooltip>
        </Stack>
      </AppShell.Navbar>

      {/* Main - Área principal donde se renderizan las rutas hijas */}
      <AppShell.Main>
        {/* Outlet renderiza el contenido de la ruta activa */}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

// Creamos la ruta raíz con TanStack Router
export const Route = createRootRoute({
  component: RootComponent,
})

// Árbol de rutas - Aquí importamos y organizamos todas las rutas
// TanStack Router usa este árbol para manejar la navegación
import { Route as IndexRoute } from './index'
import { Route as UserRoute } from './user'
import { Route as ProfileRoute } from './profile'
import { Route as NewsRoute } from './news'

export const routeTree = Route.addChildren([
  IndexRoute,
  UserRoute,
  ProfileRoute,
  NewsRoute,
])