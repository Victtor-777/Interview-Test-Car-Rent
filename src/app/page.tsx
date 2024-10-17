import FormHome from "@/components/pages/home/form-home";
import { api } from "@/lib/api";
import { CarMakesResponse } from "@/types/types-cars";

async function getCars(): Promise<CarMakesResponse> {
  const response = await api(
    `/vehicles/GetMakesForVehicleType/car?format=json`,
    {
      next: {
        revalidate: 60 * 60,
      },
    }
  );

  const cars: CarMakesResponse = await response.json();
  return cars;
}

export default async function Home() {
  const cars = await getCars();

  return (
    <div className="container flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">Filter Vehicles</h1>
      <FormHome cars={cars.Results} />
    </div>
  );
}
