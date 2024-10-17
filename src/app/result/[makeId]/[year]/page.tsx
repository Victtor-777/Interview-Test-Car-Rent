import ErrorMessage from "@/components/error-message";
import { Loading } from "@/components/loading";
import CarList from "@/components/pages/result/car-list";
import { getCarsByMakeAndYear } from "@/lib/api";
import { Suspense } from "react";

interface ResultPageProps {
  params: {
    makeId: string;
    year: string;
  };
}

export async function generateStaticParams() {
  // Popular makes and recent years
  const popularMakes = [441, 448, 449, 452, 460];
  const recentYears = Array.from({ length: 5 }, (_, i) =>
    (new Date().getFullYear() - i).toString()
  );

  const params = popularMakes.flatMap((makeId) =>
    recentYears.map((year) => ({
      makeId: makeId.toString(),
      year,
    }))
  );

  return params;
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { makeId, year } = params;
  const cars = await getCarsByMakeAndYear(makeId, year);

  // Check if there was an error or if no cars were found
  if (!cars || cars.Count === 0) {
    return (
      <ErrorMessage message="No cars found for the selected make and year." />
    );
  }

  return (
    <div className="container my-6">
      <Suspense fallback={<Loading />}>
        <CarList makeId={makeId} year={year} />
      </Suspense>
    </div>
  );
}
