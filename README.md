# Zypher – Encriptador de Texto 🛡️

**Zypher** es una aplicación web sencilla para encriptar y desencriptar mensajes de texto mediante un algoritmo de sustitución de vocales. Fue desarrollado como parte de un desafío del programa Oracle Next Education (ONE) de Alura LATAM.

---

## 🔐 Funcionamiento

Las vocales en el texto se reemplazan por las siguientes secuencias específicas, y también se puede revertir el proceso (desencriptar):

| Vocal | Encriptación |
|:-----:|:------------:|
| a     | ai           |
| e     | enter        |
| i     | imes         |
| o     | ober         |
| u     | ufat         |

**Ejemplos:**

- Encriptar:  
  `"gato"` → `"gaitober"`

- Desencriptar:  
  `"gaitober"` → `"gato"`

---

## ✅ Requisitos

- Solo se permiten **letras minúsculas sin acentos ni caracteres especiales**.
- El sistema debe permitir tanto encriptar como desencriptar textos.
- El resultado debe mostrarse al usuario de forma clara.

---

## ⚙️ Características

- Entrada de texto mediante campo `<textarea>` o `<input>`.
- Botón para encriptar el texto.
- Botón para desencriptar el texto.
- Área de salida para el resultado.
- Botón “Copiar” para copiar el texto al portapapeles.
- Diseño responsive y estilo adaptativo (modo claro/oscuro opcional).

---

## 🧱 Tecnologías

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## 🛠️ Instalación y uso

1. Clona o descarga el repositorio.
2. Abre `index.html` en tu navegador web.
3. Escribe tu mensaje, elige encriptar o desencriptar, y visualiza el resultado.
4. Usa el botón de copiar para copiar el resultado al portapapeles.

---

## 🌐 Demo en vivo

Disponible en GitHub Pages:  
`https://cristoferordonez.github.io/Zypher-Encriptador-De-Texto/`

---

## 📝 Estructura del proyecto

```
├── index.html
├── style.css
├── scripts.js
├── README.md
└── assets/
    └── (imágenes, íconos, etc.)
```

---

## 📋 Roadmap / Próximas mejoras

- Modo oscuro con persistencia en `localStorage`.
- Validación avanzada de entrada de texto.
- Notificaciones al usuario (alertas o banners).
- Copy-to-clipboard con confirmación visual.
- Internacionalización o soporte multilenguaje.

---

## 👤 Autor

**Cristofer Ordóñez**  
Desarrollador frontend — Integrante de Oracle One.  
✉️ [Tu correo electrónico]

---

## 📬 Contacto

Para consultas, sugerencias o colaboración, contáctame por correo o a través de redes sociales.

---

## 📝 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE) (opcional, agrega si corresponde).

---

### Referencias

Basado en la lógica y estructura de proyectos similares de Alura Oracle ONE.
