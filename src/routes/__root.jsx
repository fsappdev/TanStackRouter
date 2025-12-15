import { Outlet, createRootRoute, Link } from '@tanstack/react-router'
import { AppShell, Burger, Group, NavLink, Title } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconUser, IconUserCircle, IconNews } from '@tabler/icons-react'

// Componente raíz que envuelve todas las rutas
// Aquí definimos el layout principal de la aplicación
function RootComponent() {
    // Hook para manejar el estado de apertura/cierre del menú móvil
    const [opened, { toggle }] = useDisclosure()

    return (
        // AppShell es el componente de layout principal de Mantine
        // Proporciona header, navbar, y área de contenido
        <AppShell
        header={{ height: 60 }}
        navbar={{
            width: 250,
            breakpoint: 'sm',
            collapsed: { mobile: !opened }
        }}
        padding="md"
        >
        {/* Header - Barra superior de la aplicación */}
        <AppShell.Header>
            <Group h="100%" px="md">
            {/* Botón hamburguesa para móviles */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
            <Title order={3}>TanStack Router + Mantine</Title>
            </Group>
        </AppShell.Header>

        {/* Navbar - Menú lateral de navegación */}
        <AppShell.Navbar p="md">
            <Title order={4} mb="md">Navegación</Title>
            
            {/* Link a la página de usuarios */}
            <NavLink
            component={Link}
            to="/user"
            label="Usuarios"
            leftSection={<IconUser size={20} />}
            onClick={() => opened && toggle()}
            />
            
            {/* Link a la página de perfil */}
            <NavLink
            component={Link}
            to="/profile"
            label="Perfil"
            leftSection={<IconUserCircle size={20} />}
            onClick={() => opened && toggle()}
            />
            
            {/* Link a la página de noticias */}
            <NavLink
            component={Link}
            to="/news"
            label="Noticias"
            leftSection={<IconNews size={20} />}
            onClick={() => opened && toggle()}
            />
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