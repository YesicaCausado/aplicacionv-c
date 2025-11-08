# 🔮 Magic 8 Ball Digital

Una aplicación web interactiva de la clásica bola mágica 8, creada con Vite, JavaScript Vanilla y Capacitor para Android.

## ✨ Características

- 🎱 **Bola mágica 3D interactiva** con efectos visuales realistas
- 💫 **20 respuestas diferentes** clasificadas en positivas, neutrales y negativas
- 🌀 **Animación de sacudida** al hacer click en la bola
- 📜 **Historial de preguntas** con las últimas 5 consultas
- ✨ **Efectos especiales** con chispas brillantes animadas
- 📱 **Diseño responsive** optimizado para móviles y tablets
- 🎨 **Interfaz moderna** con gradientes y animaciones suaves

## 🚀 Cómo usar

1. Escribe tu pregunta (preferiblemente de sí o no)
2. Haz click en la bola mágica o presiona el botón "Preguntar"
3. ¡La bola se sacude y revela la respuesta mágica!

## 🛠️ Tecnologías Utilizadas

- **Vite** - Build tool ultrarrápido
- **JavaScript Vanilla** - Sin frameworks, puro JS
- **CSS3** - Animaciones y efectos modernos
- **Capacitor** - Para convertir la app en aplicación Android

## 📦 Instalación y Desarrollo

### Instalar dependencias
```bash
cd proyecto
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

### Construir para producción
```bash
npm run build
```

### Abrir en Android Studio
```bash
npx cap open android
```

## 📱 Compilar para Android

1. Asegúrate de tener Android Studio instalado
2. Ejecuta `npm run build` para generar la carpeta dist
3. Ejecuta `npx cap sync` para sincronizar cambios
4. Abre el proyecto en Android Studio con `npx cap open android`
5. Compila y ejecuta en tu dispositivo o emulador

## 📂 Estructura del Proyecto

```
aplicacionvyc/
├── proyecto/
│   ├── src/
│   │   ├── main.js      # Lógica de la aplicación
│   │   └── style.css    # Estilos y animaciones
│   ├── dist/            # Build de producción
│   ├── android/         # Proyecto Android nativo
│   ├── index.html       # HTML principal
│   ├── capacitor.config.json  # Configuración Capacitor
│   └── package.json     # Dependencias
```

## 🎮 Cómo Funciona

La Magic 8 Ball utiliza un array de 20 respuestas predefinidas que se seleccionan aleatoriamente. Las respuestas están categorizadas en:

- **Positivas** (10 respuestas) - ✨ Respuestas afirmativas y optimistas
- **Neutrales** (5 respuestas) - ⏰ Respuestas ambiguas
- **Negativas** (5 respuestas) - ❌ Respuestas negativas

## 👨‍💻 Autor

Creado como proyecto educativo con Node.js, Vite y Capacitor.

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo.

---

🔮 **¡Haz tu pregunta y deja que la magia decida!** ✨
