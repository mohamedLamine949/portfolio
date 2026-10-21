import { getCollection, type CollectionEntry } from 'astro:content';

export type Projet = CollectionEntry<'projets'>;
export type Categorie = Projet['data']['category'];

// L'ordre des clés fixe l'ordre des groupes sur la page Projets.
export const CATEGORIES: Record<Categorie, { label: string; short: string; cadre: string; intro: string }> = {
  entrepreneuriat: {
    label: 'Sirius · entrepreneuriat',
    short: 'Sirius',
    cadre: 'Entrepreneuriat · Sirius',
    intro: "Produits et projets clients réalisés au sein de Sirius, l'ESN que j'ai cofondée en 2025.",
  },
  stage: {
    label: 'Projets de stage',
    short: 'Stage',
    cadre: 'Projet de stage',
    intro: "Missions conduites en entreprise lors de mes trois stages (14 mois au total) : deux chez ASR Groupe, en 1re et en dernière année, et un stage de mobilité internationale au Portugal.",
  },
  academique: {
    label: 'Projets académiques',
    short: 'Académique',
    cadre: 'Projet académique',
    intro: "Projets réalisés dans le cadre du cycle ingénieur à CY Tech, dont le projet de fin d'études.",
  },
  recherche: {
    label: 'Projet de recherche',
    short: 'Recherche',
    cadre: 'Projet de recherche',
    intro: "Travail de recherche d'une année mené en classes préparatoires.",
  },
};

export async function getProjets(): Promise<Projet[]> {
  const all = await getCollection('projets', ({ data }) => !data.draft);
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}
