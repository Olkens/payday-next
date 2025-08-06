"use client";

import { Payment } from "@/lib/types";
import AddPaymentForm from "@/components/ui/AddPaymentForm";
import MonthsTable from "@/components/ui/MonthsTable";
import { useState } from "react";

export default function PaymentTable() {
  const [payments, setPayments] = useState<Payment[]>([
    {
      title: "rower",
      cost: 399,
      paymentsLeft: 4,
      numberOfPayments: 5,
    },
    {
      title: "monitor",
      cost: 372,
      paymentsLeft: 6,
      numberOfPayments: 10,
    },
  ]);

  const initialPayment: Payment = {
    title: "",
    cost: 0,
    paymentsLeft: 0,
    numberOfPayments: 0,
  };
  const handleSubmit = (payment: Payment) => {
    console.log("Dane wysłane:", payment);
    setPayments([...payments, payment]);
  };

  return (
    <div>
      <MonthsTable payments={payments}></MonthsTable>
      <AddPaymentForm
        payment={initialPayment}
        onSubmitFunction={handleSubmit}
      ></AddPaymentForm>
    </div>
  );
}
