---
title: Campagne de phishing simulée, analyse et plan d'action
summary: Analyse d'une campagne de sensibilisation menée auprès de 100 collaborateurs et restitution à un comité de direction fictif, avec tableau de bord, évaluation de l'impact et feuille de route de sécurisation.
category: academique
period: 2025 – 2026 · 3e année
year: 2025
role: Analyste, projet individuel
context: CY Tech, spécialité cybersécurité
tags: [Restitution, Tableau de bord, Sensibilisation, Feuille de route, Python]
featured: true
order: 4
cover: ../../assets/projets/simulation-phishing/dashboard-kpi.png
coverAlt: Tableau de bord des indicateurs de la campagne de phishing
gallery:
  - { src: ../../assets/projets/simulation-phishing/analyse_strategique.png, alt: "Analyse par poste et par département" }
  - { src: ../../assets/projets/simulation-phishing/analyse_temporelle.png, alt: "Analyse temporelle des interactions" }
metrics:
  - { value: "43 %", label: "des destinataires ont cliqué sur le lien" }
  - { value: "25 %", label: "ont saisi leurs identifiants" }
  - { value: "14 %", label: "ont signalé le message" }
links:
  - { label: "Dépôt GitHub", url: "https://github.com/mohamedLamine949/simulation_phishing" }
---

## Démarche

À partir d'un jeu de données synthétique généré en Python, analyse d'une campagne de phishing simulée envoyée à 100 collaborateurs, puis préparation d'une restitution destinée à la direction générale.

## Constats

- 43 % des destinataires ont cliqué sur le lien, et 58 % d'entre eux ont ensuite saisi leurs identifiants.
- Seuls 14 % ont signalé le message.
- Les fonctions les plus exposées sont chef de projet, comptable, chef de produit et consultant.

## Recommandations

- **Feuille de route en trois horizons** :
  - de 0 à 30 jours : formation ciblée et simulations mensuelles ;
  - de 30 à 90 jours : mentorat et renforcement de l'authentification ;
  - de 3 à 6 mois : authentification multifacteur obligatoire et supervision continue.
- **Évaluation de l'impact** : comparaison du coût potentiel d'une attaque avec l'investissement préventif, estimé à 30 k€.
- **Gouvernance** : répartition des responsabilités entre la DSI, les ressources humaines, la direction et l'équipe sécurité, avec un objectif de réduction des vulnérabilités de 60 % en six mois.

## Environnement technique

Python (génération des données, analyses, visualisations), tableaux de bord.
