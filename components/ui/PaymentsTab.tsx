"use client";

import { Payment } from "@/lib/types";
import AddPaymentForm from "@/components/ui/AddPaymentForm";
import PaymentsTable from "@/components/ui/PaymentTable";
import { useState } from "react";

export default function PaymentData(props: { paymentsData: Payment[] }) {
  const [payments, setPayments] = useState<Payment[]>(props.paymentsData);

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
      <PaymentsTable payments={payments}></PaymentsTable>
      <AddPaymentForm
        payment={initialPayment}
        onSubmitFunction={handleSubmit}
      ></AddPaymentForm>
    </div>
  );
}
