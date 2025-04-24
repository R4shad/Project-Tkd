# Proyecto Taekwondo - Asociación Municipal de Taekwondo Quillacollo

Este proyecto es una aplicación web diseñada para gestionar la **Asociación Municipal de Taekwondo Quillacollo**, brindando herramientas para la gestión de clubes afiliados, actividades, y reportes de ingresos. El objetivo principal es facilitar la administración de las actividades deportivas y mejorar la visibilidad de la asociación.

## Tecnologías Utilizadas

- **Frontend**:

  - **React**: Framework de JavaScript para construir interfaces de usuario interactivas y dinámicas.
  - **TypeScript**: Superconjunto de JavaScript que agrega tipado estático, lo que facilita la detección temprana de errores y mejora la mantenibilidad del código.
  - **TailwindCSS**: Framework CSS para diseño eficiente y altamente personalizable, permitiendo un desarrollo rápido y limpio.
  - **Vite**: Herramienta de construcción y empaquetado extremadamente rápida para aplicaciones modernas.
  - **React Router**: Librería para la gestión de rutas y navegación en aplicaciones React.
  - **React-Icons**: Librería de íconos para facilitar la integración de iconos de forma sencilla en la interfaz.
  - **React-Helmet-Async**: Utilizado para gestionar dinámicamente el título de la página y las etiquetas meta de cada página.
  - **Swiper**: Librería de deslizadores para crear interfaces atractivas con deslizamientos, como la visualización de clubes.
  - **React-Quill**: Editor de texto enriquecido para crear y editar contenido, útil para manejar publicaciones o noticias de la asociación.
  - **Supabase**: Base de datos y autenticación backend para manejar datos de manera eficiente y segura.

- **Backend**:
  - **Supabase**: Se utilizó para gestionar la base de datos de la aplicación, incluyendo funcionalidades de autenticación, almacenamiento y gestión de datos en tiempo real.

## Buenas Prácticas de Desarrollo

- **Modularización del Código**: El proyecto está estructurado en componentes reutilizables y bien organizados para facilitar el mantenimiento y escalabilidad.
- **Uso de TypeScript**: Asegura que el código sea más predecible y fácil de depurar, utilizando tipos estrictos para evitar errores comunes.
- **Documentación y Comentarios**: Se ha documentado y comentado el código de manera adecuada para facilitar la comprensión de los desarrolladores que trabajen en el proyecto en el futuro.
- **Manejo de Estado con Hooks**: Uso de hooks de React para gestionar el estado de forma eficiente, manteniendo el código limpio y sin complicaciones.
- **Prácticas de Accesibilidad**: El diseño y la estructura de la interfaz de usuario están orientados a ser accesibles y fáciles de usar por cualquier persona.

## Beneficios y Soluciones para la Asociación

### **Visibilidad y Gestión Eficiente de Clubes**

- La aplicación proporciona una **vista clara y organizada de los clubes afiliados**, con detalles de cada uno y la opción de consultar información adicional de manera rápida.
- Los usuarios pueden **navegar fácilmente entre clubes**, con botones de llamada a la acción como "Clubes Afiliados", lo que facilita la interacción.

### **Automatización de Reportes de Ingresos**

- Se han implementado formularios y tablas de datos que permiten al personal generar **reportes diarios de ingresos** de forma sencilla y sin necesidad de cálculos manuales.
- La integración con **Supabase** permite almacenar los datos de manera eficiente y acceder a ellos en tiempo real.

### **Mejor Experiencia de Usuario**

- Gracias a **React-Quill**, los usuarios pueden crear y editar contenido como noticias o actualizaciones de manera dinámica y sencilla.
- La interfaz está diseñada para ser **responsive**, asegurando que la aplicación sea accesible desde cualquier dispositivo, desde teléfonos móviles hasta escritorios.

### **Optimización de Recursos**

- La aplicación está optimizada para ofrecer tiempos de carga rápidos, utilizando **Vite** para la construcción eficiente y **TailwindCSS** para un diseño limpio y adaptable.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/R4shad/Project-Tkd

   ```

2. Instala las dependencias:

   ```bash
   npm install

   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
