"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Payment } from "@/lib/types";

export default function PaymentTable(props: { payments: Payment[] }) {
  const { payments } = props;
  return (
    <>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Tytuł</TableHead>
            <TableHead>Kwota</TableHead>
            <TableHead>Ile rat zostało</TableHead>
            <TableHead>Ilość rat</TableHead>
            <TableHead>Koszt kredytu</TableHead>
            <TableHead>Ile zostało to spłaty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment: Payment, i: number) => (
            <TableRow key={i} className="border-b-2 border-s-amber-50">
              <TableCell className="font-medium">{payment.title}</TableCell>
              <TableCell>{payment.cost} zł</TableCell>
              <TableCell>{payment.paymentsLeft}</TableCell>
              <TableCell>{payment.numberOfPayments}</TableCell>
              <TableCell>3000</TableCell>
              <TableCell>{payment.cost * payment.paymentsLeft}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
}
