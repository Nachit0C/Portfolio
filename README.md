# 🚀 Portfolio Personal Full-Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

Desarrollo FullStack de mi portfolio, con diseño interactivo y responsivo. Implementado con el fin de mostrar mis proyectos, habilidades y ofrecer una vía de contacto directa, todo con un enfoque fuerte en buenas prácticas de desarrollo, código limpio y una experiencia de usuario fluida.

🔗 **[Ver Demo en Vivo]((https://ignacio-ciccone-portfolio.vercel.app/))**

## ✨ Características Principales

* **🎨 Interfaz Moderna y Responsiva:** Construida con Material UI (MUI) y animaciones fluidas con Framer Motion.
* **🌗 Modo Oscuro/Claro:** Implementado con un `ThemeProvider` personalizado para una transición sin interrupciones.
* **🌐 Multilingüe (ES/EN):** Sistema de internacionalización propio utilizando Zustand para el manejo del estado global.
* **❤️ Sistema de "Likes" Interactivo:** Un contador de visitas/apoyo conectado a una base de datos en tiempo real con feedback visual instantáneo.
* **✉️ Formulario de Contacto Real:** Con validación y procesamiento de forma segura en el backend para el envío de correos.

## 🏗️ Arquitectura y Tecnologías

El proyecto está dividido en dos partes principales, siguiendo una arquitectura cliente-servidor:

### Frontend (Desplegado en [Vercel](https://vercel.com/))
* **Framework:** React + Vite
* **Estilos y Componentes:** Material UI (MUI)
* **Animaciones:** Framer Motion
* **Manejo de Estado Global:** Zustand (para el idioma) y Custom Hooks (`useVisited`, `useContactForm`).

### Backend (Desplegado en [Render](https://render.com/))
* **Framework:** Flask (Python)
* **Diseño del Software:** Desarrollado íntegramente aplicando **Programación Orientada a Objetos (POO)** y respetando rigurosamente los **Principios SOLID** para asegurar escalabilidad y fácil mantenimiento.
* **CORS:** Configurado para aceptar peticiones exclusivamente desde el dominio de Vercel.

### Base de Datos (Desplegada en [Neon.tech](https://neon.tech/))
* **Motor:** PostgreSQL
* **Uso:** Almacenamiento seguro de visitas al sitio a través del botón de "like" y almacenamiento de los mails enviados.

## 🤝 Contacto
¿Te interesa mi perfil? Puedes contactarme a través del formulario en mi portfolio o en mis redes:

LinkedIn: [Ignacio Ciccone](https://www.linkedin.com/in/ignacio-ciccone/)
