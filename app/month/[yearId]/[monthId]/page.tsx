import PaymentTab from "@/components/ui/PaymentsTab";
import { months } from "@/lib/months";
import { Payment } from "@/lib/types";

export default async function MonthPage({
  params,
}: {
  params: Promise<{ monthId: number; yearId: number }>;
}) {
  const { monthId, yearId } = await params;
  const monthName = months[monthId];

  const data = await fetch(
    `http://localhost:8080/api/v1/payments/${yearId}/${monthId}`,
  );
  const payments: Payment[] = await data.json();
  console.log(payments);

  return (
    <div className="w-3/5 flex flex-col items-center justify-center">
      <h2>{monthName}</h2>
      <PaymentTab
        paymentsData={payments}
        monthId={monthId}
        monthName={monthName}
      ></PaymentTab>
    </div>
  );
}
