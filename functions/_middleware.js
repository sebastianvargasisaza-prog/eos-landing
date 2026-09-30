// Redirige www.eossuite.com al dominio principal, conservando ruta y parametros.
// Cualquier otro host pasa de largo hacia el archivo estatico.
export async function onRequest(context) {
  try {
    const url = new URL(context.request.url);
    if (url.hostname.toLowerCase() === "www.eossuite.com") {
      url.hostname = "eossuite.com";
      return Response.redirect(url.toString(), 301);
    }
  } catch (e) {
    // Si algo falla, el sitio se sirve igual.
  }
  return context.next();
}
