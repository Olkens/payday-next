import { months } from "@/lib/months";
import Link from "next/link";

export default function MonthsPage() {
  return (
    <div className={"w-3/5"}>
      <ul className={"flex flex-wrap gap-2 justify-center"}>
        {months.map((month: string, i: number) => (
          <div
            key={i}
            className={
              "border-s-gray-50 flex-col items-center border-spacing-1 outline rounded-md w-1/4 flex justify-center min-h-32 cursor-pointer"
            }
          >
            <Link href={`/month/${i}`}>
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
