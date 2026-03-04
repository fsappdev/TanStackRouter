import { useState } from 'react'
import { Outlet, createRootRoute, Link, useMatchRoute } from '@tanstack/react-router'
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
  Stack,
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
  IconUserPlus,
  IconUserEdit,
  IconApps,
  IconChevronRight,
} from '@tabler/icons-react'

// Componente raíz que envuelve todas las rutas
// Aquí definimos el layout principal de la aplicación
function RootComponent() {
  // Hook para manejar el estado de apertura/cierre del menú móvil (burger del header)
  const [opened, { toggle }] = useDisclosure()

  // Estado para manejar el "collapse" de la barra lateral (ancho completo vs sólo iconos)
  const [navbarCollapsed, setNavbarCollapsed] = useState(false)

  // Estado para manejar si el menú de "Usuarios" está abierto o cerrado
  const [usersMenuOpened, setUsersMenuOpened] = useState(false)

  // Hook para cambiar el esquema de color (light/dark)
  const { setColorScheme } = useMantineColorScheme()

  // Hook para obtener el esquema de color actual computado
  // Esto resuelve 'auto' al valor real (light o dark)
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  // Hook para detectar la ruta actual y marcar como activa
  const matchRoute = useMatchRoute()

  // Función para alternar entre modo claro y oscuro
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark')
  }

  // Función para alternar el estado de colapso del navbar
  const toggleNavbarCollapsed = () => {
    setNavbarCollapsed((prev) => !prev)
  }

  // Función para verificar si una ruta está activa
  const isActive = (path) => {
    return matchRoute({ to: path }) !== false
  }

  // Verificar si alguna subruta de usuarios está activa
  const isUsersRouteActive = 
    isActive('/user') || 
    isActive('/newuser') || 
    isActive('/edituser') || 
    isActive('/usersmodules')

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
          mb="md"
          justify={navbarCollapsed ? 'center' : 'space-between'}
          gap="xs"
        >
          {/* Si está colapsado, mostramos solo el icono del timón */}
          {navbarCollapsed ? (
            <Tooltip label="Navegación">
              <ActionIcon variant="subtle" aria-label="Navegación">
                <IconSteeringWheel size={22} />
              </ActionIcon>
            </Tooltip>
          ) : (
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

        {/* Links de navegación */}
        {/* Usamos Stack para apilar los elementos verticalmente */}
        <Stack gap="xs">
          {/* Link a la página de inicio */}
          <Tooltip
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
              active={isActive('/')}
            />
          </Tooltip>

          {/* Menú desplegable de Usuarios (Nested NavLink) */}
          {navbarCollapsed ? (
            // Cuando está colapsado, mostramos solo el icono con tooltip
            <Tooltip label="Usuarios" position="right">
              <NavLink
                component={Link}
                to="/user"
                leftSection={<IconUser size={20} />}
                onClick={() => opened && toggle()}
                active={isUsersRouteActive}
              />
            </Tooltip>
          ) : (
            // Cuando está expandido, mostramos el menú desplegable completo
            <NavLink
              label="Usuarios"
              leftSection={<IconUser size={20} />}
              rightSection={
                <IconChevronRight
                  size={16}
                  style={{
                    transform: usersMenuOpened ? 'rotate(90deg)' : 'none',
                    transition: 'transform 200ms ease',
                  }}
                />
              }
              onClick={() => setUsersMenuOpened((prev) => !prev)}
              opened={usersMenuOpened}
              active={isUsersRouteActive}
            >
              {/* Submenú de Usuarios */}
              <NavLink
                component={Link}
                to="/user"
                label="Lista de Usuarios"
                leftSection={<IconUser size={18} />}
                onClick={() => opened && toggle()}
                active={isActive('/user')}
              />
              <NavLink
                component={Link}
                to="/newuser"
                label="Nuevo Usuario"
                leftSection={<IconUserPlus size={18} />}
                onClick={() => opened && toggle()}
                active={isActive('/newuser')}
              />
              <NavLink
                component={Link}
                to="/edituser"
                label="Editar Usuario"
                leftSection={<IconUserEdit size={18} />}
                onClick={() => opened && toggle()}
                active={isActive('/edituser')}
              />
              <NavLink
                component={Link}
                to="/usersmodules"
                label="Módulos Disp."
                leftSection={<IconApps size={18} />}
                onClick={() => opened && toggle()}
                active={isActive('/usersmodules')}
              />
            </NavLink>
          )}

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
              active={isActive('/profile')}
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
              active={isActive('/news')}
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
import { Route as NewUserRoute } from './newuser'
import { Route as EditUserRoute } from './edituser'
import { Route as UsersModulesRoute } from './usersmodules'
import { Route as ProfileRoute } from './profile'
import { Route as NewsRoute } from './news'

export const routeTree = Route.addChildren([
  IndexRoute,
  UserRoute,
  NewUserRoute,
  EditUserRoute,
  UsersModulesRoute,
  ProfileRoute,
  NewsRoute,
])