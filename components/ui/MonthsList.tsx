"use client";

import YearPicker from "@/components/ui/YearPicker";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Month } from "@/lib/types";
import CreateNewYearButton from "./CreateNewYearButton";

export default function MonthsList() {
  const [yearCounter, setYearCounter] = useState(2025);
  const [months, setMonths] = useState<Month[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMonths = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8080/api/v1/months/${yearCounter}`,
        );
        if (!res.ok) throw new Error("Błąd pobierania danych");
        const data: Month[] = await res.json();
        setMonths(data);
      } catch (err) {
        console.error(err);
        setMonths([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMonths();
  }, [yearCounter, months.length]);

  const handleCreateNewYear = async (year: string) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(
      `http://localhost:8080/api/v1/months/${year}`,
      requestOptions,
    );
  };

  const increaseYearCounter = () => setYearCounter((prev) => prev + 1);
  const decreaseYearCounter = () => setYearCounter((prev) => prev - 1);

  return (
    <div className="w-3/5">
      <YearPicker
        yearCounter={yearCounter}
        increaseCounter={increaseYearCounter}
        decreaseCounter={decreaseYearCounter}
      />

      {loading && <p className="text-center">Ładowanie...</p>}
      <div className="flex flex-row justify-center">
        {months.length < 1 && (
          <CreateNewYearButton
            setMonths={setMonths}
            year={yearCounter}
            handleCreateNewYear={handleCreateNewYear}
          ></CreateNewYearButton>
        )}
      </div>
      <ul className="flex flex-wrap gap-2 justify-center">
        {months.length > 0 &&
          months.map((month, i) => (
            <div
              key={i}
              className="border-s-gray-50 flex-col items-center border-spacing-1 outline rounded-md w-1/4 flex justify-center min-h-32 cursor-pointer"
            >
              <Link href={`/month/${yearCounter}/${i}`}>
                <li>
                  {month.name}
                  <div className="pt-2">
                    <p>Przychody: xxxxxx zł</p>
                    <p>Wydatki: xxxxxxxx zł</p>
                    <p>Netto: xxxxxxx zł</p>
                  </div>
                </li>
              </Link>
            </div>
          ))}
      </ul>
    </div>
  );
}
