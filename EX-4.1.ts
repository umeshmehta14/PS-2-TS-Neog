type Car = {
  kind: "Car";
  make: string;
  model: string;
};
type Bicycle = {
  kind: "Bicycle";
  amount: number;
  brand: string;
};

type Vehicle = Car | Bicycle;
