# JMPORTFOLIO — Portfolio Web statique

Ce dépôt contient un site portfolio statique pour présenter tes projets, compétences et moyens de contact.

**Fonctionnalités clés**
- Pages responsive (HTML/CSS)
- Rendu dynamique des projets depuis `assets/js/projects.js`
- Modale de détails et galerie d'images
- Formulaire de contact (Formspree ou équivalent)

**Structure importante**
- `index.html` — page principale
- `assets/css/` — styles (`style.css`, `animations.css`)
- `assets/js/main.js` — interactions globales (nav, CV, modal)
- `assets/js/projects.js` — données des projets et rendu des cartes
- `assets/projects/<slug>/` — dossier d'images par projet

Guide rapide

- Exécuter localement : ouvre `index.html` dans ton navigateur (site statique).
- Ajouter/éditer un projet : édite `assets/js/projects.js` et renseigne `images: []` avec `assets/projects/<slug>/1.jpg`, etc.
- Images : place les images dans `assets/projects/<slug>/` et nomme-les `1.jpg`, `2.jpg`...

Déploiement (rapide)

- GitHub Pages (branche `main` ou `gh-pages`) : pousse le repo et active Pages dans les réglages.
- Azure Static Web Apps : créer un Static Web App et configurer l'origine sur ce repo, build output `/`.
- Alternatif : Netlify / Vercel (drag & drop ou connexion repo).

Commandes utiles

```bash
git add README.md
git commit -m "Update README"
git push origin main
```

Contribution

- Ouvre une issue ou fais une PR si tu veux modifier le design ou ajouter des projets.

Licence

Ce dépôt est personnel — adapte la licence selon ton usage.

---
_Besoin d'un README en anglais, d'un changement de style, ou que je commit/pousse ces modifications pour toi ?_
