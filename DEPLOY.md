# Déployer le site sur GitHub Pages

Le dossier `site/` est **déjà un dépôt Git** avec un premier commit.
Il ne contient QUE le site vitrine (aucun fichier admin/SQL sensible).

## 1. Créer le dépôt GitHub
Sur https://github.com/new :
- Nom : `scoolmanager-site` (ou autre)
- **Public**
- ⚠️ NE PAS cocher « Add a README », « .gitignore » ni licence (le dépôt doit être vide).

## 2. Pousser le code
Dans une invite de commande, placez-vous dans le dossier `site/` puis :

```bash
git remote add origin https://github.com/VOTRE-COMPTE/scoolmanager-site.git
git branch -M main
git push -u origin main
```

> Au premier `push`, une fenêtre de connexion GitHub peut s'ouvrir
> (Git Credential Manager). Connectez-vous une seule fois.
>
> 💡 Astuce Claude Code : tapez `! git push -u origin main` pour lancer la
> commande directement dans la session.

## 3. Activer GitHub Pages
Sur le dépôt GitHub : **Settings → Pages**
- **Source** : « Deploy from a branch »
- **Branch** : `main` / `/ (root)` → **Save**

Après ~1 minute, le site est en ligne :
**https://VOTRE-COMPTE.github.io/scoolmanager-site/**

## 4. Domaine personnalisé (optionnel)
Settings → Pages → « Custom domain » : saisir p. ex. `www.debacs.cm`,
puis créer un enregistrement DNS `CNAME` pointant vers
`VOTRE-COMPTE.github.io` chez votre registrar.

---

### Mises à jour ultérieures
Après toute modification des fichiers :
```bash
git add -A
git commit -m "Mise à jour du site"
git push
```
GitHub Pages redéploie automatiquement.
