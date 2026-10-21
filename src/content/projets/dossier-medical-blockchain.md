---
title: Dossier médical sur blockchain, preuve de concept et comparaison avec une PKI
summary: Projet de fin d'études. Conception et réalisation d'une plateforme de gestion de documents médicaux sur Ethereum, avec accès conditionné au consentement du patient, et comparaison mesurée avec une infrastructure à clés publiques classique.
category: academique
period: 2025 – 2026 · projet de fin d'études
year: 2026
role: Équipe de quatre étudiants, participation à toutes les phases
context: CY Tech, cycle ingénieur, 3e année (une année universitaire)
tags: [Preuve de concept, Gestion des identités et des accès, Santé, Ethereum, Solidity, Étude comparative]
featured: true
order: 2
illustration: ../../assets/illustrations/identites-blockchain.svg
metrics:
  - { value: "4", label: "espaces utilisateurs avec séparation des privilèges" }
  - { value: "2", label: "architectures comparées : PKI et blockchain" }
  - { value: "1 an", label: "de travail, du cadrage à la soutenance" }
---

## Problématique

La gestion des identités et des accès aux données de santé repose habituellement sur une infrastructure à clés publiques (PKI) centralisée. Le projet évalue si une architecture décentralisée peut remplacer ou compléter ce modèle, en termes de sécurité, de confidentialité et de performance.

## Organisation

Le projet a été mené par une équipe de quatre étudiants. Chaque membre a pris part à l'ensemble des phases : recherche, étude comparative, conception, puis réalisation et tests.

## Preuve de concept réalisée

- **Infrastructure** : réseau Ethereum local (Hardhat), comptes utilisateurs gérés et authentifiés par MetaMask, smart contracts développés en Solidity.
- **Quatre espaces distincts** : patient, médecin, administration et gestion des identités et des accès (IAM), chacun doté de ses propres droits.
- **Documents médicaux chiffrés** et enregistrés sur la blockchain.
- **Accès par consentement** : un médecin ne peut consulter un document qu'après autorisation explicite du patient.
- **Séparation stricte des privilèges** entre les rôles.

## Démarche comparative

- **Étude de trois solutions d'identité décentralisée** (Sovrin, uPort, Hyperledger) et du standard DID du W3C, selon leur capacité de montée en charge et leur niveau de confidentialité.
- **Tests automatisés et mesure d'indicateurs de performance** sur les deux architectures, PKI et blockchain.
- **Rapport d'analyse de 30 pages** présentant les résultats et les conditions d'adoption.

## Environnement technique

Ethereum, Solidity, Hardhat (réseau local), MetaMask, standards DID du W3C, tests automatisés.
