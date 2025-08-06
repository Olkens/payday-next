import PaymentTable from "@/components/ui/PaymentsTable";
import { months } from "@/lib/months";

export default async function MonthPage({
  params,
}: {
  params: Promise<{ monthId: number; name: string }>;
}) {
  const { monthId } = await params;

  return (
    <div className="w-3/5 flex flex-col items-center justify-center">
      <h2>{months[monthId]}</h2>
      <PaymentTable></PaymentTable>
    </div>
  );
}
