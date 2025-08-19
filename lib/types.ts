export interface Payment {
  title: string;
  cost: number;
  paymentsLeft: number;
  numberOfPayments: number;
  month: Month;
}

export interface Month {
  name: string;
  year: string;
}
