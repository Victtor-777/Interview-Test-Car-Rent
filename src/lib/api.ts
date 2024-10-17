import { CarModelsResponse } from "@/types/types-cars";
import { env } from "process";

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.API_URL;
  const apiPrefix = "/api";
  const url = new URL(apiPrefix.concat(path), baseUrl);

  return fetch(url, init);
}

export async function getCarsByMakeAndYear(
  makeId: string,
  year: string
): Promise<CarModelsResponse | null> {
  try {
    const response = await api(
      `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
      { next: { revalidate: 60 * 60 } }
    );

    const cars: CarModelsResponse = await response.json();
    return cars;
  } catch (error) {
    console.error("Erro ao buscar os carros:", error);
    return null;
  }
}
