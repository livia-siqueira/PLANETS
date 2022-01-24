import api from "src/services/api";
import { Planet } from "../types";

interface APIPlanet {
  planets: Planet[];
}

export async function allPlanets() {
  const planets = await api.get<APIPlanet>("/planets.json");
  return planets.data;
}

export async function namesPlanets() {
  const { planets }: APIPlanet = await allPlanets();
  const names = planets.map((planet: Planet) => {
    return planet.name;
  });
  return names;
}

export async function getPlanetById(id: string) {
  const { planets }: APIPlanet = await allPlanets();
  const planet = planets.find((prev) => {
    return prev.id === id;
  });
  return planet;
}
