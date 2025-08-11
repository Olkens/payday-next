import PaymentTab from "@/components/ui/PaymentsTab";
import { months } from "@/lib/months";
import { Payment } from "@/lib/types";

export default async function MonthPage({
  params,
}: {
  params: Promise<{ monthId: number; name: string }>;
}) {
  const { monthId } = await params;
  const data = await fetch("http://localhost:8080/api/v1/payments");
  const payments: Payment[] = await data.json();

  return (
    <div className="w-3/5 flex flex-col items-center justify-center">
      <h2>{months[monthId]}</h2>
      <PaymentTab paymentsData={payments}></PaymentTab>
    </div>
  );
}
