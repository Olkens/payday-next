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
  const handleSubmit = async (payment: Payment) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payment),
    };
    const response = await fetch(
      "http://localhost:8080/api/v1/payments",
      requestOptions,
    );
    const savedPayment = await response.json();

    setPayments([...payments, savedPayment]);
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
