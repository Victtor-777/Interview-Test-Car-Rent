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
    <div className="mt-20">
      <div className="flex flex-col py-6">
        <h1 className="text-center text-4xl font-medium mb-4">Today Cars!</h1>
        <div className="flex justify-center">
          <Link href={"/"}>
            <MoveLeft />
            Back to Home
          </Link>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-4">
        Cars for <span className="text-blue-500">{makeName}</span> from the year{" "}
        <span className="text-blue-500">{year}</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cars.Results.map((car) => (
          <CarCard key={car.Model_ID} car={car} />
        ))}
      </div>
    </div>
  );
}
