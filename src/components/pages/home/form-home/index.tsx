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
    <div className="flex flex-col gap-6 w-full max-w-md">
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
        onClick={handleNavigate}
        disabled={!make || !year}
        className="mt-4"
      >
        Next
      </Button>
    </div>
  );
}
