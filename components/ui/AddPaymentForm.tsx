"use client";

import { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Payment } from "@/lib/types";

interface AddPaymentFormProps {
  payment: Payment;
  onSubmitFunction: (payment: Payment) => void;
}

export default function AddPaymentForm({
  payment,
  onSubmitFunction,
}: AddPaymentFormProps) {
  const [formData, setFormData] = useState<Payment>(payment);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFunction(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      switch (name) {
        case "title":
          return { ...prev, title: value };
        case "cost":
          return { ...prev, cost: Number(value) };
        case "paymentsLeft":
          return { ...prev, paymentsLeft: Number(value) };
        case "numberOfPayments":
          return { ...prev, numberOfPayments: Number(value) };
        default:
          return prev;
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="cost"
          placeholder="Cost"
          value={formData.cost}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="paymentsLeft"
          placeholder="Payments Left"
          value={formData.paymentsLeft}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="numberOfPayments"
          placeholder="Number Of Payments"
          value={formData.numberOfPayments}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
