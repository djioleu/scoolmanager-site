# Site vitrine — ScoolManager

Site de présentation du logiciel **ScoolManager**, édité par **DEBA Communication Services sarl**.

Site statique (HTML/CSS/JS, sans dépendance) — s'ouvre en double-cliquant sur `index.html`
et se déploie tel quel sur GitHub Pages, Netlify ou Vercel.

## Fichiers
- `index.html` — page unique (accueil, fonctionnalités, avantages, étapes, entreprise, contact)
- `styles.css` — charte EduPay (bleu #2563EB) + accent ambre DEBA (#F59E0B)
- `script.js` — navigation, animations, formulaire de contact
- `logo.png` — logo DEBA Communication Services

## ⚠️ À personnaliser avant mise en ligne
Remplacez les valeurs de contact (marquées par des `X` / placeholders) :
- **E-mail** : dans `index.html` (`mailto:contact@debacs.cm`) et dans `script.js` (`CONTACT_EMAIL`)
- **Téléphone / WhatsApp** : `index.html` → `+237 6XX XX XX XX` et le lien `https://wa.me/2376XXXXXXXX`
- **Adresse** : `index.html` → « Douala, Cameroun »

> Le formulaire de contact ouvre le client mail (mailto). Pour recevoir les messages
> automatiquement, branchez un service comme [Formspree](https://formspree.io) en
> remplaçant le bloc « Formulaire de contact » de `script.js`.

## Déploiement GitHub Pages
Voir les instructions à la racine du dépôt.
