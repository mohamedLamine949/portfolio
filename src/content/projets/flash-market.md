---
title: Flash Market, marketplace mobile au Mali
summary: Conception, lancement et pilotage d'une marketplace mobile iOS et Android reliant particuliers, commerçants et artisans au Mali, avec paiement par Mobile Money.
category: entrepreneuriat
period: Juin 2026 – aujourd'hui
year: 2026
role: CEO et chef de produit
context: Produit propre de Sirius, développé en binôme avec mon associé
tags: [Gestion de produit, Business model, Spécifications, React Native, Supabase, Mobile Money]
featured: true
order: 1
cover: ../../assets/projets/flash-market/banniere.png
coverAlt: Captures de l'application Flash Market publiées sur l'App Store
showCover: false
metrics:
  - { value: "1 600+", label: "utilisateurs inscrits en trois mois" }
  - { value: "275", label: "comptes professionnels" }
  - { value: "2 550", label: "annonces publiées" }
  - { value: "118", label: "paiements Mobile Money traités" }
gallery:
  - { src: ../../assets/projets/flash-market/01-marche-du-mali.png, alt: "Écran d'accueil et annonces mises en avant" }
  - { src: ../../assets/projets/flash-market/02-pres-de-chez-toi.png, alt: "Recherche géolocalisée par catégorie" }
  - { src: ../../assets/projets/flash-market/03-parle-au-vendeur.png, alt: "Messagerie en temps réel entre acheteur et vendeur" }
  - { src: ../../assets/projets/flash-market/04-vends-en-2-minutes.png, alt: "Parcours de publication d'une annonce" }
  - { src: ../../assets/projets/flash-market/05-annonces-avec-photos.png, alt: "Fiches annonces avec photos, prix et localisation" }
  - { src: ../../assets/projets/flash-market/06-boutique-pro.png, alt: "Boutique professionnelle avec catalogue et commandes" }
links:
  - { label: "App Store", url: "https://apps.apple.com/fr/app/id6784725073" }
  - { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.chapchap.flashmarket" }
  - { label: "Site de Sirius", url: "https://sirius-mali.tech" }
---

## Contexte

Au Mali, la vente entre particuliers et la recherche de prestataires reposent encore largement sur le bouche-à-oreille et les groupes de messagerie. Flash Market propose une alternative structurée : une application en français, avec des prix en FCFA et un moyen de paiement adapté au marché local, le Mobile Money.

## Responsabilités

- **Cadrage** : rédaction des spécifications fonctionnelles et techniques, puis formalisation du modèle économique.
- **Pilotage de la réalisation** : du début du développement en juin 2026 à la mise en production en juillet 2026 sur l'App Store et Google Play.
- **Lancement commercial** : campagnes sur les réseaux sociaux, production de contenus vidéo, partenariats avec des marques.
- **Management** : coordination d'une équipe de cinq personnes (communication, production vidéo, service client).

## Choix structurants

- **Deux modes de fonctionnement.** Un marché de biens où particuliers et professionnels coexistent, et un annuaire de services où chaque artisan dispose d'une vitrine permanente.
- **Un modèle économique centré sur le vendeur.** La recherche et la prise de contact restent gratuites pour l'acheteur. Trois formules d'abonnement sont proposées aux vendeurs (gratuite, 2 000 F et 5 000 F par mois).
- **Un quota mensuel de publications.** La limite de l'offre gratuite porte sur le nombre de mises en ligne dans le mois, et non sur le nombre d'annonces actives. Ce choix cible les revendeurs réguliers, susceptibles de souscrire un abonnement.
- **La protection des données privées côté serveur**, par des politiques de sécurité appliquées directement dans la base de données (PostgreSQL RLS).

## Commande et paiement sécurisés

Depuis octobre 2026, Flash Market permet de commander et de payer directement dans l'application, sur le modèle d'une plateforme de commerce en ligne :

- **Paiement par séquestre** : le montant réglé par l'acheteur est bloqué jusqu'à la remise de l'article.
- **Confirmation de livraison** par un code à usage unique, communiqué par l'acheteur au moment de la remise.
- **Reversement automatique aux vendeurs** par Mobile Money, via l'API de paiement LigdiCash.
- **Gestion automatisée** des annulations, remboursements et litiges.
- **Boutiques certifiées** pour les vendeurs habilités à recevoir des commandes en ligne.

## Environnement technique

React Native, Expo, Supabase (PostgreSQL, authentification, temps réel, stockage, fonctions serveur), notifications push, géolocalisation, API de paiement et de reversement LigdiCash, back-office d'administration et de modération. Développement assisté par IA.
