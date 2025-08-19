"use client";

import { Payment } from "@/lib/types";
import AddPaymentForm from "@/components/ui/AddPaymentForm";
import PaymentsTable from "@/components/ui/PaymentTable";
import { useState } from "react";

interface PaymentTabProps {
  paymentsData: Payment[];
  monthId: number;
  monthName: string;
  year: string;
}

export default function PaymentData(props: PaymentTabProps) {
  const [payments, setPayments] = useState<Payment[]>(props.paymentsData);
  const monthId = props.monthId;
  const initialPayment: Payment = {
    title: "",
    cost: 0,
    paymentsLeft: 0,
    numberOfPayments: 0,
    month: {
      name: props.monthName,
      year: props.year,
    },
  };

  const handleSubmit = async (payment: Payment) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": `application/json/` },
      body: JSON.stringify(payment),
    };
    const response = await fetch(
      `http://localhost:8080/api/v1/payments/${monthId}`,
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
