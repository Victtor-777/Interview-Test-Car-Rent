// components/pages/result/CarList.tsx
import CarCard from "@/components/pages/result/car-card";
import ErrorMessage from "@/components/error-message";
import { CarModelsResponse } from "@/types/types-cars";
import { getCarsByMakeAndYear } from "@/lib/api";
import { Link } from "@/components/back-to-home-link";
import { MoveLeft } from "lucide-react";

interface CarListProps {
  makeId: string;
  year: string;
}

export default async function CarList({ makeId, year }: CarListProps) {
  const cars: CarModelsResponse | null = await getCarsByMakeAndYear(
    makeId,
    year
  );

  if (!cars || cars.Count === 0) {
    return (
      <ErrorMessage message="No cars found for the selected make and year." />
    );
  }

  const makeName = cars.Results[0]?.Make_Name || makeId;

  return (
    <div>
      <div className="flex justify-center">
        <Link href={"/"}>
          <MoveLeft />
          Back to Home
        </Link>
      </div>
      <h1 className="text-2xl font-bold mb-4">
        Cars for {makeName} from the year {year}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.Results.map((car) => (
          <CarCard key={car.Model_ID} car={car} />
        ))}
      </div>
    </div>
  );
}
