# Boys 2 Men — Site Web Premium

Barber Shop · Annemasse · 74100

## Structure

```
boys2men/
├── index.html            ← Accueil
├── concept.html          ← Histoire & ADN de la marque
├── prestations.html      ← Tarifs & services
├── nous-rejoindre.html   ← Recrutement + formulaire
│
├── assets/
│   ├── css/
│   │   ├── main.css        ← Variables, reset, typographie, boutons
│   │   ├── animations.css  ← Ticker, reveals, effets hover
│   │   └── components.css  ← Navbar, footer, sections, formulaire
│   ├── js/
│   │   ├── main.js         ← Lenis, GSAP init, navbar, menu mobile
│   │   ├── animations.js   ← Toutes les animations ScrollTrigger
│   │   └── form.js         ← Validation formulaire candidature
│   ├── images/             ← Répertoire pour assets supplémentaires
│   ├── fonts/              ← Fonts locales (optionnel)
│   └── videos/             ← Vidéos (optionnel)
│
├── components/
│   ├── navbar.html         ← Composant navbar (référence)
│   ├── footer.html         ← Composant footer (référence)
│   └── cta.html            ← Section CTA (référence)
│
└── img/                    ← Photos du salon (source)
    ├── devanture.png
    ├── IMG_9148.JPG
    ├── IMG_9149.JPG
    ├── IMG_9150.JPG
    ├── IMG_9151.JPG
    └── IMG_9152.JPG
```

## Technologies

- HTML5 sémantique
- CSS3 (custom properties, grid, clamp, clip-path)
- JavaScript ES6+
- **GSAP 3.12** + ScrollTrigger (CDN)
- **Lenis 1.1** — smooth scroll (CDN)
- Google Fonts — Bebas Neue, Inter, Montserrat

## Palette

```
--black:     #0B0B0B
--charcoal:  #151515
--gold:      #C9A86A
--offwhite:  #F7F5F2
--sage:      #6E7A5F
```

## Réservation

Tous les boutons CTA renvoient vers :
https://www.planity.com/boys-2-men-74100-annemasse-w9g

## Lancement

Ouvrir `index.html` dans un navigateur — ou servir via un serveur local :

```bash
npx serve .
# → http://localhost:3000
```

## SEO Keywords

- Barber Annemasse
- Barbier Annemasse
- Coiffeur homme Annemasse
- Coupe homme Annemasse
- Barbe Annemasse
- Boys 2 Men 74100
