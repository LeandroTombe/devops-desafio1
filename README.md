npm install
node index.js
npx nodemon index.js
curl http://localhost:3000/hora
npm test

# 🚀 devops-desafio1

API Node.js de ejemplo con endpoint `/hora` que devuelve la hora, día, mes y año. Incluye integración continua y despliegue automático en Render.

---

## 🛠️ Comandos básicos para usar la app

| Paso | Comando | Descripción |
|------|---------|-------------|
| 1️⃣ Instalar dependencias | `npm install` | Instala las dependencias del proyecto |
| 2️⃣ Correr la app         | `node index.js`<br/>o<br/>`npx nodemon index.js` | Inicia el servidor localmente |
| 3️⃣ Probar la API         | Navegador: [http://localhost:3000/hora](http://localhost:3000/hora)<br/>o<br/>`curl http://localhost:3000/hora` | Accede al endpoint `/hora` |
| 4️⃣ Ejecutar los tests    | `npm test` | Corre los tests automáticos |

---

## ⚙️ Explicación del workflow de CI/CD

El archivo `.github/workflows/ci.yml` automatiza pruebas, build y despliegue:

| Job    | ¿Qué hace? |
|--------|-----------|
| 🧪 **test**  | Prueba en Node.js 18.x y 20.x, instala dependencias, corre lint y tests |
| 🏗️ **build** | Simula un paso de build (puedes personalizarlo) |
| 🚀 **deploy** | Si todo pasa, despliega automáticamente en Render usando los secrets configurados |

---

## ☁️ Despliegue automático en Render

El workflow usa la acción [`JorgeLNJunior/render-deploy`](https://github.com/JorgeLNJunior/render-deploy) para desplegar en Render. Debes configurar estos secrets en tu repositorio:

- `RENDER_SERVICE_ID`
- `RENDER_API_KEY`

> ⚠️ **Nota:** No necesitas configurar `GITHUB_TOKEN`, GitHub Actions lo provee automáticamente.


