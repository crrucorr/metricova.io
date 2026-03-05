# Guía Simple y Rápida para Publicar tu Página (Deploy)

¡Felicidades por tener tu página lista! Ahora vamos a ponerla en internet para que cualquiera pueda verla. Usaremos **GitHub** (para guardar tu código) y **Vercel** (para publicar la página). 

Todo esto es 100% gratuito. Sigue estos pasos uno por uno sin saltarte nada.

---

## Parte 1: Guardar tu código en la nube (GitHub)

GitHub es como un "Google Drive" pero diseñado especialmente para código.

1. **Crea una cuenta gratuita en GitHub:**
   * Entra a [github.com](https://github.com/) y regístrate.
   
2. **Descarga GitHub Desktop (la forma más fácil):**
   * Descarga e instala [GitHub Desktop](https://desktop.github.com/). Esta aplicación facilita todo sin usar comandos complicados.
   * Abre la aplicación e inicia sesión con tu nueva cuenta de GitHub.

3. **Sube tu carpeta a GitHub:**
   * En GitHub Desktop, ve al menú superior: `File` > `Add Local Repository...` (Añadir repositorio local).
   * Selecciona la carpeta donde tienes guardado tu código (la carpeta `hritik-agency`). Se te preguntará si quieres "crear un repositorio", dile que **sí**.
   * Haz clic en el botón azul abajo a la izquierda que dice **"Commit to main"**.
   * Finalmente, haz clic en el botón azul arriba a la derecha que dice **"Publish repository"** (Publicar repositorio). Asegúrate de desmarcar la casilla que dice "Keep this code private" si quieres que sea público (no es obligatorio).

¡Listo! Tu código ya está guardado seguro en la nube de GitHub.

---

## Parte 2: Publicar la página en internet (Vercel)

Vercel es la plataforma que tomará tu código de GitHub y lo convertirá en un enlace web que puedes compartir con tus clientes.

1. **Crea una cuenta gratuita en Vercel:**
   * Entra a [vercel.com/signup](https://vercel.com/signup).
   * **Muy Importante:** Cuando te pregunte cómo quieres registrarte, elige **"Continue with GitHub"**. Esto conectará automáticamente tu Vercel con la cuenta de GitHub que acabas de crear.

2. **Importa tu proyecto:**
   * Una vez dentro de Vercel, verás un botón negro grande que dice **"Add New..."** o **"Add New Project"**. Haz clic ahí.
   * Verás una lista con tus proyectos de GitHub. Busca el que acabas de subir (probablemente se llame `hritik-agency`) y haz clic en el botón **"Import"**.

3. **Publicar (Deploy):**
   * En la siguiente pantalla, Vercel es muy inteligente y detectará automáticamente cómo está construida tu página (usando Vite/React).
   * ¡No cambies nada de la configuración!
   * Simplemente baja y haz clic en el botón azul que dice **"Deploy"**.

4. **¡Espera unos segundos!**
   * Verás una pantalla de carga y unos confetis en pantalla cuando termine.
   * Vercel te dará un enlace (algo como `hritik-agency.vercel.app`).
   
**¡Ya está!** Si haces clic en ese enlace, tu página ya está viva en internet. Si más adelante quieres comprar un dominio profesional (como `tuagencia.com`), puedes hacerlo directamente desde la pestaña "Domains" dentro de la configuración de Vercel.
