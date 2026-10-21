---
title: LOCUS, plateforme d'audit d'applications web
summary: Développement du module d'analyse de sécurité d'une plateforme qui audite un site ou un SaaS à partir de son URL et remet au client un rapport priorisé avec un plan d'action à 7, 30 et 90 jours.
category: stage
period: Juil. – Oct. 2026
year: 2026
role: Ingénieur développement et DevSecOps, stage de fin d'études
context: ASR Groupe · produit développé et commercialisé par l'entreprise
tags: [Audit, Sécurité applicative, OWASP, DevSecOps, Restitution client]
featured: true
order: 3
illustration: ../../assets/illustrations/locus.svg
metrics:
  - { value: "7 / 30 / 90 j", label: "horizons du plan d'action remis au client" }
  - { value: "4", label: "familles d'analyses intégrées" }
links:
  - { label: "asrgroup.fr", url: "https://asrgroup.fr" }
---

## Contexte

Les éditeurs de sites et de petits SaaS utilisent en général plusieurs outils distincts : scanner de sécurité, mesure d'audience, suivi des erreurs, supervision des performances. Les résultats, dispersés et techniques, se traduisent difficilement en décisions. LOCUS centralise ces analyses et répond à trois questions : le niveau de sécurité de l'application, l'usage réel qu'en font ses utilisateurs, et les actions à engager en priorité.

## Parcours client

1. Déclaration du site ou de l'application par son URL.
2. Vérification de la propriété du domaine (enregistrement DNS ou dépôt de code), puis définition du périmètre autorisé.
3. Paramétrage de l'analyse : environnements, plages horaires, intensité des tests, données exclues.
4. Analyse comportementale des utilisateurs (PostHog) : parcours, abandons, conversions, erreurs.
5. Analyse de sécurité.
6. Remise d'un rapport : synthèse, niveau de risque par catégorie, vulnérabilités confirmées, recommandations priorisées, estimation de l'effort et plan d'action.

## Réalisations

- **Tests dynamiques (DAST)** avec Nuclei et OWASP ZAP : technologies obsolètes, vulnérabilités connues, authentification, formulaires et API.
- **Analyse du code source** : analyse statique (Semgrep), dépendances et configurations (Trivy), secrets exposés (Gitleaks), mises à jour des bibliothèques (Dependabot).
- **Correction assistée** (offre avancée) : localisation du code vulnérable, proposition d'un correctif documenté, tests en préproduction et déploiement après validation explicite du client.

## Enseignements

La valeur d'un audit tient moins à la détection des failles qu'à leur traduction en décisions compréhensibles pour un interlocuteur non technique.

## Environnement technique

Next.js, TypeScript, PostHog, Nuclei, OWASP ZAP, Semgrep, Trivy, Gitleaks, GitHub Apps, Docker, CI/CD.
