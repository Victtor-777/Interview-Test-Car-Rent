import { GasSvg } from "@/components/svg/gas";
import { PeopleSvg } from "@/components/svg/people";
import { WheelSvg } from "@/components/svg/wheel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
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
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">{car.Make_Name}</h3>
            <p className="text-gray-500">{car.Model_Name}</p>
          </div>
          <div>
            <Heart />
          </div>
        </div>
        <div className="mt-2 w-full rounded-md">
          <Image
            src="/i4.png"
            width={500}
            height={500}
            alt={`Image from ${car.Model_Name} car`}
            className="w-full"
          />
        </div>
        <div className="w-full mb-4 flex justify-between items-center text-xs gap-2">
          <div className="flex items-center gap-1 text-muted-foreground font-medium">
            <GasSvg />
            80 L
          </div>
          <div className="flex items-center gap-1 text-muted-foreground font-medium">
            <WheelSvg />
            Manual
          </div>
          <div className="flex items-center gap-1 text-muted-foreground font-medium">
            <PeopleSvg />4 People
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center font-medium">
            <span className="text-xl">$80/</span>
            <p className="text-sm">day</p>
          </div>
          <Button variant={"blue"}>Rent Now</Button>
        </div>
      </div>
    </Card>
  );
}
