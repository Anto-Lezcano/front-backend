# Validador de Usuarios con React y Node.js

Esta es una aplicación web simple que permite validar si un nombre está registrado en una lista definida en el backend. Si el nombre es válido, se muestra un saludo personalizado.

## 🧩 Tecnologías utilizadas

- **Frontend:** React con Vite + TypeScript
- **Backend:** Node.js + Express
- **Estilos:** CSS simple

---

## 📁 Estructura del proyecto

.
├── backend/
│ ├── src/
│ │ ├── app.js # Servidor Express con dos endpoints
│ │ └── db/
│ └──lista_personas.js # Lista de usuarios válidos
├── frontend/
│ ├── src/
│ │ ├── App.tsx
│ │ ├── api/validarUsuApi.ts
│ │ └── assets/App.css
│ └── vite.config.ts
├── README.md

---

## 🚀 Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/Anto-Lezcano/front-backend.git
cd front-backend

Backend
cd server
npm i
npm run dev

Frontend
cd client
npm i
npm run dev
```
