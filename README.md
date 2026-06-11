# KERN Energy — Website

Statische Website für KERN Energy GmbH.

## Seiten

- `index.html` — Startseite
- `pages/technologie.html` — Technologiepfade (MSR + Fusion)
- `pages/ueber-uns.html` — Team, Mission, Partner
- `pages/kontakt.html` — Kontaktformular, Karriere

## Deployment auf GitHub Pages

1. Neues Repository anlegen (z.B. `kern-energy`)
2. Alle Dateien in den `main`-Branch pushen:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/DEIN-USERNAME/kern-energy.git
   git push -u origin main
   ```
3. Im Repository: **Settings → Pages → Source: main branch / root**
4. Die Seite ist dann unter `https://DEIN-USERNAME.github.io/kern-energy/` erreichbar

## Ordnerstruktur

```
kern/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── nav.js
└── pages/
    ├── technologie.html
    ├── ueber-uns.html
    └── kontakt.html
```

## Hinweise

- Keine externe Abhängigkeit außer Google Fonts (CDN)
- Vollständig responsiv (Mobile, Tablet, Desktop)
- Kontaktformular ist rein visuell — für echte Funktionalität Formspree.io oder ähnliches einbinden
