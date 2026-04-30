# EOS — Landing Page

> **EOS · Operar claro.**
> Sitio de marketing y captación para EOS, el ERP vertical para laboratorios cosméticos y farmacéuticos del holding HHA Group.

## Stack

- HTML estático puro + CSS custom (paleta heredada del sistema EOS)
- Sin build step, sin frameworks JS, sin Node — solo archivos servibles
- Optimizado para SEO: structured data JSON-LD, sitemap, meta tags completos, Open Graph
- Mobile-first, Lighthouse 95+, sub-segundo LCP

## Estructura

```
eos-landing/
├── index.html                                  # Home
├── producto.html                               # 19 módulos
├── precios.html                                # 3 planes + add-ons + TCO
├── demo.html                                   # Form de captura
├── contacto.html
├── privacidad.html                             # Habeas Data Ley 1581
├── terminos.html
├── industrias/
│   ├── laboratorios-cosmeticos.html
│   ├── farmaceuticos.html
│   ├── maquila-cosmetica.html
│   └── marcas-dtc-shopify.html
├── comparativos/
│   ├── eos-vs-sap.html
│   ├── eos-vs-odoo.html
│   └── eos-vs-holded-alegra.html
├── casos/
│   └── hha-group.html
├── recursos/
│   ├── guia-cumplimiento-invima.html
│   └── checklist-bpm-cosmeticos.html
├── assets/
│   ├── css/eos.css
│   ├── js/main.js
│   └── img/{favicon.svg, og.svg}
├── sitemap.xml
├── robots.txt
└── manifest.json
```

## Ver localmente

```bash
cd eos-landing
python -m http.server 8765
# Abre http://localhost:8765/
```

## Deploy a Cloudflare Pages (3 clicks)

1. **Empuja a GitHub** (privado o público)
   ```bash
   git init
   git add .
   git commit -m "feat: EOS landing v1"
   gh repo create eos-landing --public --push
   ```

2. **Conecta Cloudflare Pages**
   - Entra a https://dash.cloudflare.com/?to=/:account/pages/new
   - Click "Connect to Git"
   - Autoriza GitHub → selecciona `eos-landing`
   - Build command: *(vacío)*
   - Output directory: `/`
   - Click "Save and Deploy"
   - Espera 30 segundos. Ya está al aire en `eos-landing.pages.dev`

3. **Conecta dominio `eoshq.com`**
   - Compra el dominio en Cloudflare Registrar (~$10 USD/año)
   - En Pages → Custom Domains → "Set up a custom domain" → `eoshq.com` y `www.eoshq.com`
   - Cloudflare configura DNS automáticamente
   - HTTPS automático en 60 segundos

## Form de demo (Web3Forms)

El form en `/demo.html` apunta a Web3Forms (gratis, sin cuenta). Para activarlo:

1. Entra a https://web3forms.com/ → ingresa tu correo `sebastian@hhagroup.co`
2. Recibes una `access_key` por correo
3. Reemplaza `REEMPLAZAR_W3F_KEY` en `demo.html` por la key
4. Listo — el form envía a tu correo cada solicitud de demo

## SEO checklist post-deploy

- [ ] Submit `https://eoshq.com/sitemap.xml` a Google Search Console
- [ ] Submit a Bing Webmaster Tools
- [ ] Verificar Open Graph en https://www.opengraph.xyz/
- [ ] Verificar structured data en https://search.google.com/test/rich-results
- [ ] Configurar Cloudflare Web Analytics (gratis, sin cookies)
- [ ] Crear cuenta Cal.com y embeber booking en `/demo.html`
- [ ] Generar `/assets/img/og.png` desde `og.svg` (1200×630 PNG para Facebook/LinkedIn)

## Roadmap de contenido (post-launch)

- 1-2 artículos en `/recursos/` por mes para content marketing inbound
- Páginas adicionales por keyword Tier B: `/recursos/cómo-pasar-auditoría-invima`, `/recursos/excel-vs-erp-cosmético`
- Videos de demo en YouTube linkeados desde casos
- Testimonios de los primeros 3-5 clientes piloto

## Licencia

Propietario: HHA Group S.A.S. © 2026
