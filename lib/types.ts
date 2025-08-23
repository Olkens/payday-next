export interface Payment {
  title: string;
  cost: number;
  paymentsLeft: number;
  numberOfPayments: number;
  month?: Month;
  income?: number;
}

export interface Month {
  name: string;
  year: string;
  idx?: number;
}
