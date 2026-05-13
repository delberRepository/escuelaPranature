# React + Vite
Enlace a la web: https://delberrepository.github.io/escuelaPranature/

# Pranature

Aplicación web SPA desarrollada con React y Vite para un centro de danza y bienestar.  
El proyecto implementa una estructura moderna de navegación y componentes reutilizables utilizando React Router y Bootstrap.

## Características

- SPA (Single Page Application)
- Navegación dinámica con React Router
- Uso de `NavLink` para navegación activa
- Componentes reutilizables
- Diseño responsive con Bootstrap
- Footer dinámico y común en toda la aplicación
- Rutas dinámicas para actividades
- Uso del hook `useParams`
- Estructura moderna y escalable

## Secciones principales

- Inicio
- El Centro
- Tarifas
- Contacto
- Actividades
  - Yoga
  - Danza Oriental
  - Nutrición y Talleres
  - Clases Privadas

## Funcionalidad destacada

La sección de actividades funciona mediante rutas dinámicas.  
Las actividades se almacenan en un array y cada una genera automáticamente su propia URL utilizando `useParams`, permitiendo navegar entre actividades de forma dinámica.

Ejemplo:

```bash
/actividades/yoga
/actividades/danza-oriental
/actividades/nutricion
