# CV Numérique — Thème Balatro

Un portfolio / CV numérique construit avec React + Vite, inspiré du thème visuel et ludique du jeu vidéo "Balatro".

Ce dépôt contient la version front-end (vanille React + Vite) de mon CV interactif : cartes, decks, sections projets/compétences/contact et assets (images, sons, PDF) organisés pour ressembler à l'univers Balatro.

## Ce que contient ce dépôt

- Stack : React (JSX), Vite pour le dev rapide et le bundling.
- Structure principale : composants réutilisables dans `src/Components`, pages et points d'entrée dans `src`, assets dans `src/assets` et contenus statiques dans `public/`.
- Thème/ressources Balatro : les composants présents dans `Reactbits/Balatro/` et les styles associés permettent de reprendre l'esthétique du jeu.

## Prérequis

- Node.js (LTS recommandée, par ex. 18+)
- npm, yarn ou pnpm

## Installation (PowerShell)

Ouvrir un terminal à la racine `portfolio/` et lancer :

```powershell
npm install
# ou
# yarn install
```

## Développement (mode HMR)

Lancer le serveur de développement :

```powershell
npm run dev
# ou
# yarn dev
```

Ensuite ouvrir http://localhost:5173/ (ou l'URL indiquée par Vite).

## Build et preview

Générer la version optimisée :

```powershell
npm run build

# pour prévisualiser la build produite :
npm run preview
```

## Déploiement

Tu peux déployer la build sur des services statiques comme Netlify, Vercel ou GitHub Pages. Pour Vercel/Netlify, connecte simplement le repo et sélectionne `npm run build` comme commande de build et `dist/` comme dossier de sortie.

## Structure importante

- `index.html` — page d'entrée pour Vite
- `src/main.jsx` — point d'entrée React
- `src/App.jsx` — composant racine
- `src/Components/` — composants réutilisables (Navbar, Hero, Decks, Contact, etc.)
- `Reactbits/Balatro/` — éléments spécifiques au thème Balatro (styles et composants)
- `src/assets/` — images, sons, PDF utilisés dans le CV
- `public/` — fichiers statiques servis tels quels

## Personnalisation

- Modifier les textes (locales) : `src/locales/fr.json` et `src/locales/en.json`.
- Modifier les images/sons : déposer de nouveaux fichiers dans `src/assets/img` ou `src/assets/mp3` et mettre à jour les imports.
- Thèmes/styles : les fichiers CSS pour chaque composant sont dans leurs dossiers respectifs (`.css`).

## Contrat rapide (inputs / outputs)

- Input : fichiers sources React (JSX/CSS) + assets
- Output : bundle statique optimisé dans `dist/` après `npm run build`
- Modes d'erreur communs : assets manquants (chemins relatifs), erreurs de dépendances (exécuter `npm install`), problèmes de version Node (utiliser LTS)

## Remerciements et crédits

- Thème visuel inspiré de "Balatro" jeu développé par LocalThunk et édité par Playstack — éléments graphiques et comportement adaptés pour donner un style ludique au CV.
- Certains assets (images, icônes, polices) peuvent être soumis à des licences — vérifier les fichiers dans `src/assets` et `public/` pour les crédits spécifiques.

## Contact

Pour toute question ou correction : ajoutez une issue ou contacte-moi via la section Contact du site.
