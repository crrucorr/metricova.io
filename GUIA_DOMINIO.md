# Guía Simple: Cómo Conectar tu Propio Dominio (ej. kpidrome.com)

Tener un dominio propio le da profesionalismo a tu agencia. Ya tienes tu página publicada en Vercel (con un enlace como `kpidrome.vercel.app`), ahora vamos a conectarle un dominio personalizado.

Hay dos caminos muy sencillos. Lee ambos y elige el que prefieras.

---

## Opción 1: Comprar el dominio directamente en Vercel (La más fácil y rápida)

Si aún NO has comprado tu dominio, esta es la mejor opción. Vercel hace todo el trabajo técnico por ti automáticamente.

1. **Entra a tu proyecto en Vercel:**
   * Ve a [vercel.com](https://vercel.com) e inicia sesión.
   * Haz clic en tu proyecto (`kpidrome` o `hritik-agency`).

2. **Ve a la sección de Dominios:**
   * En el menú superior de tu proyecto, haz clic en **"Settings"** (Configuración).
   * En el menú de la izquierda, haz clic en **"Domains"** (Dominios).

3. **Compra tu dominio:**
   * Verás un botón que dice **"Buy"** (Comprar). Haz clic ahí.
   * Escribe el nombre que quieres (ejemplo: `kpidrome.com`) y busca si está disponible.
   * Si está disponible, sigue los pasos para pagar (con tarjeta de crédito).
   * **¡Listo!** Vercel conectará todo automáticamente. En unos minutos, tu página funcionará con tu nuevo dominio.

---

## Opción 2: Ya compraste tu dominio temporal en Hostinger

Si tu dominio (ej. `kpidrome.com`) está registrado en Hostinger, el proceso se divide en dos partes simples:

### Parte A: Dile a Vercel cuál es tu dominio
1. Entra a tu proyecto en [Vercel](https://vercel.com) > menú **Settings** (Arriba) > **Domains** (A la izquierda).
2. Escribe tu dominio en la caja de texto (ejemplo: `kpidrome.com`) y presiona **"Add"** (Agregar).
3. Aparecerán unos cuadros de advertencia rojos o amarillos mostrando unos códigos. **Deja esta ventana abierta**, los vas a copiar en el siguiente paso.
   * *Te dará dos códigos largos llamados **Nameservers** (usualmente son `ns1.vercel-dns.com` y `ns2.vercel-dns.com`).*

### Parte B: Configura Hostinger
1. Abre otra pestaña y entra a tu cuenta de [Hostinger](https://hpanel.hostinger.com/).
2. Haz clic en la opción **"Dominios"** en el menú principal.
3. Encuentra tu dominio en la lista y haz clic en el botón **"Administrar"**.
4. En el menú de la izquierda, busca y haz clic en **"DNS/Nameservers"**.
5. Verás una sección que se llama **"Nameservers"** (o Servidores de Nombres). Haz clic en el botón que dice **"Cambiar nameservers"**.
6. Selecciona la opción que dice **"Cambiar nameservers"** (en lugar de usar los nameservers predeterminados de Hostinger).
7. Te aparecerán dos campos de texto (Nameserver 1 y Nameserver 2). 
   * Borra lo que hay ahí y **pega los dos códigos** que Vercel te mostró en la Parte A (`ns1.vercel-dns.com` en el primero y `ns2.vercel-dns.com` en el segundo).
8. Presiona **"Guardar"**.

### Parte C: ¡Solo queda esperar!
* Los cambios de nombres de servidor (Nameservers) no son mágicos; a veces tardan unos 15 minutos, y otras veces hasta 2 horas en propagarse por internet.
* Regresa a la pestaña de Vercel (donde estaban los mensajes rojos). Actualiza la página de vez en cuando. Cuando veas que aparece una **palomita verde (✅) de "Valid"**, tu dominio ya está conectado y la página estará viva en tu propia dirección.
