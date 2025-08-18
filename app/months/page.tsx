"use client";

import YearPicker from "@/components/ui/YearPicker";
import { months } from "@/lib/months";
import Link from "next/link";
import { useState } from "react";

export default function MonthsPage() {
  const [yearCounter, setYearCouter] = useState(2025);

  const increaseYearCounter = () => {
    setYearCouter(yearCounter + 1);
  };

  const decreaseYearCounter = () => {
    setYearCouter(yearCounter - 1);
  };

  return (
    <div className={"w-3/5"}>
      <YearPicker
        yearCounter={yearCounter}
        increaseCounter={increaseYearCounter}
        decreaseCounter={decreaseYearCounter}
      ></YearPicker>
      <ul className={"flex flex-wrap gap-2 justify-center"}>
        {months.map((month: string, i: number) => (
          <div
            key={i}
            className={
              "border-s-gray-50 flex-col items-center border-spacing-1 outline rounded-md w-1/4 flex justify-center min-h-32 cursor-pointer"
            }
          >
            <Link href={`/month/${yearCounter}/${i}`}>
              <li>
                {month}
                <div className={"pt-2"}>
                  <p>Przychody: xxxx zł</p>
                  <p>Wydatki: xxxx zł</p>
                  <p>Netto: xxxx zł</p>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
