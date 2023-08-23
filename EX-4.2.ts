type Purchase = {
  kind: "Purchase";
  amount: number;
  item: string;
};

type Refund = {
  kind: "Refund";
  amount: number;
  reason: string;
};

type Transaction = Purchase | Refund;

const purchase: Transaction = {
  kind: "Purchase",
  amount: 23,
  item: "jkh",
};
