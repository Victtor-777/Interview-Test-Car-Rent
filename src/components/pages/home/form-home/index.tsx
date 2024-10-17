"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface FilterFormProps {
  cars: { MakeId: number; MakeName: string }[];
}

export default function FormHome({ cars }: FilterFormProps) {
  const [make, setMake] = useState<string | null>(null);
  const [year, setYear] = useState<string | null>(null);
  const router = useRouter();

  const handleNavigate = () => {
    if (make && year) {
      router.push(`/result/${make}/${year}`);
    }
  };

  return (
    <div className="w-[700px] bg-white shadow-[0_4px_10px_rgba(0,0,0,0.10)] p-8 rounded-lg">
      <div className="w-full flex items-center justify-center gap-6">
        <Select onValueChange={setMake}>
          <SelectTrigger>
            <SelectValue placeholder="Select Make" />
          </SelectTrigger>
          <SelectContent>
            {cars.map((car) => (
              <SelectItem key={car.MakeId} value={car.MakeId.toString()}>
                {car.MakeName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setYear}>
          <SelectTrigger>
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent>
            {[...Array(new Date().getFullYear() - 2015 + 1)].map((_, index) => {
              const yearOption = (2015 + index).toString();
              return (
                <SelectItem key={yearOption} value={yearOption}>
                  {yearOption}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>

        <Button
          variant={"blue"}
          onClick={handleNavigate}
          disabled={!make || !year}
          className="w-72"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
