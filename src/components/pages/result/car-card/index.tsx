import { Card } from "@/components/ui/card";
import Image from "next/image";

interface CarCardProps {
  car: {
    Make_Name: string;
    Model_Name: string;
    Model_ID: number;
  };
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{car.Make_Name}</h3>
        <p className="text-gray-500">{car.Model_Name}</p>
        <div className="mt-2 w-full rounded-md">
          <Image
            src="/i4.png"
            width={500}
            height={500}
            alt={`Image from ${car.Model_Name} car`}
            className="w-full"
          />
        </div>
      </div>
    </Card>
  );
}
