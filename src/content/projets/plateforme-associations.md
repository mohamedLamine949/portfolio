---
title: Plateforme SaaS de gestion pour associations
summary: Conception et réalisation, en sept sprints, d'une application web par abonnement couvrant la gestion financière et administrative des associations.
category: stage
period: Mai – Juil. 2026
year: 2026
role: Concepteur et développeur full stack, stage de fin d'études
context: ASR Groupe · projet client
tags: [Agile, SaaS, Paiements, Next.js, Stripe]
order: 10
illustration: ../../assets/illustrations/plateforme-associations.svg
metrics:
  - { value: "7", label: "sprints d'une semaine" }
  - { value: "8", label: "modules fonctionnels livrés" }
---

## Objectif

Fournir aux associations un outil unique de gestion des adhésions et des finances, en remplacement des tableurs et outils dispersés, selon un modèle d'abonnement mensuel.

## Périmètre livré

- Gestion des paiements et des remboursements (Stripe)
- Envoi d'e-mails et de newsletters (Resend)
- Génération de factures, billets et reçus fiscaux au format PDF
- Stockage des logos, documents et fichiers (AWS S3)
- Tâches automatisées en arrière-plan : relances et notifications (BullMQ, Redis)
- Sauvegarde et chiffrement des données
- Supervision des erreurs et des performances
- Déploiement continu (Docker, GitHub Actions)

## Organisation

Une semaine de conception, puis sept sprints d'une semaine, chacun conclu par une revue. Réunion d'équipe hebdomadaire, point quotidien avec le tuteur, suivi des tâches dans Linear et maquettage des interfaces sur Figma avant développement.

## Environnement technique

Next.js, TypeScript, Tailwind CSS, Supabase Auth, Stripe, Resend, AWS S3, BullMQ, Redis, Docker, GitHub Actions.
