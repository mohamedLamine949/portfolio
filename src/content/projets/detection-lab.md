---
title: Laboratoire de détection d'intrusion
summary: Simulation d'une attaque par force brute sur un serveur Linux, puis détection par analyse des journaux et dans l'outil de supervision Splunk.
category: academique
period: Nov. 2025 · 3e année
year: 2025
role: Projet individuel
context: CY Tech, spécialité cybersécurité
tags: [Supervision, Analyse de journaux, Splunk, Linux]
order: 21
cover: ../../assets/projets/detection-lab/splunk-chart.png
coverAlt: Pic de tentatives de connexion détecté dans Splunk
links:
  - { label: "Dépôt GitHub", url: "https://github.com/mohamedLamine949/detection_lab" }
---

## Objectif

Comprendre la chaîne complète d'un incident, de l'attaque à sa détection, dans un laboratoire virtuel isolé composé d'une machine attaquante (Kali Linux) et d'un serveur cible (Ubuntu).

## Étapes

1. **Simulation de l'attaque** : tentatives répétées de connexion SSH, puis scénario d'intrusion réussie.
2. **Analyse manuelle des journaux** : identification de l'adresse source, de la série d'échecs d'authentification, puis de la connexion acceptée.
3. **Supervision** : collecte des journaux dans Splunk en temps réel et visualisation mettant en évidence le pic anormal de tentatives.

## Environnement technique

VirtualBox, Kali Linux, Ubuntu Server, OpenSSH, Splunk Enterprise.
