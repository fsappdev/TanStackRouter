import { createRoute } from '@tanstack/react-router'
import { Route as RootRoute } from './__root'
import { Container, Title, Card, Text, Badge, Group, Stack, Image } from '@mantine/core'

// Datos mockup de noticias
// En una aplicación real, estos datos vendrían de una API de noticias
const mockNews = [
    {
        id: 1,
        title: 'React 19 Beta ya está disponible',
        summary: 'El equipo de React ha anunciado la versión beta de React 19 con nuevas características emocionantes incluyendo Server Components y mejoras en el rendimiento.',
        category: 'Tecnología',
        date: '10 de Diciembre, 2024',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop',
        author: 'Equipo de React'
    },
    {
        id: 2,
        title: 'Mantine 7.5 lanzado con nuevos componentes',
        summary: 'La nueva versión de Mantine incluye componentes mejorados, mejor accesibilidad y un sistema de temas más flexible.',
        category: 'UI/UX',
        date: '8 de Diciembre, 2024',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop',
        author: 'Vitaly Rtishchev'
    },
    {
        id: 3,
        title: 'TanStack Router alcanza 1 millón de descargas',
        summary: 'El router type-safe para React continúa ganando popularidad en la comunidad de desarrolladores por su excelente experiencia de desarrollo.',
        category: 'Desarrollo',
        date: '5 de Diciembre, 2024',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop',
        author: 'Tanner Linsley'
    },
    {
        id: 4,
        title: 'Vite 5.1 mejora los tiempos de compilación',
        summary: 'La última actualización de Vite trae optimizaciones significativas que reducen los tiempos de compilación hasta en un 40%.',
        category: 'Herramientas',
        date: '1 de Diciembre, 2024',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop',
        author: 'Evan You'
    },
]

// Función helper para obtener el color del badge según la categoría
const getCategoryColor = (category) => {
    const colors = {
        'Tecnología': 'blue',
        'UI/UX': 'pink',
        'Desarrollo': 'green',
        'Herramientas': 'orange'
    }
    return colors[category] || 'gray'
}

// Componente para la página de noticias
function NewsComponent() {
    return (
        <Container size="lg">
        {/* Título de la página */}
        <Title order={1} mb="xl">
            Noticias
        </Title>
        
        {/* Stack apila las tarjetas verticalmente */}
        <Stack spacing="lg">
            {/* Mapeamos cada noticia a una tarjeta */}
            {mockNews.map((news) => (
            <Card key={news.id} shadow="sm" padding="lg" radius="md" withBorder>
                {/* Imagen de la noticia */}
                <Card.Section>
                <Image
                    src={news.image}
                    height={200}
                    alt={news.title}
                />
                </Card.Section>
                
                {/* Contenido de la tarjeta */}
                <Group justify="space-between" mt="md" mb="xs">
                {/* Título de la noticia */}
                <Title order={3} style={{ flex: 1 }}>
                    {news.title}
                </Title>
                
                {/* Badge con la categoría */}
                <Badge color={getCategoryColor(news.category)}>
                    {news.category}
                </Badge>
                </Group>
                
                {/* Resumen de la noticia */}
                <Text size="sm" c="dimmed" mb="md">
                {news.summary}
                </Text>
                
                {/* Información del autor y fecha */}
                <Group justify="space-between">
                <Text size="xs" c="dimmed">
                    Por {news.author}
                </Text>
                <Text size="xs" c="dimmed">
                    {news.date}
                </Text>
                </Group>
            </Card>
            ))}
        </Stack>
        </Container>
    )
}

// Creamos la ruta para la página de noticias
export const Route = createRoute({
    getParentRoute: () => RootRoute,
    path: '/news',
    component: NewsComponent,
})