type Animal = {
  species: string;
  legs: number;
};

type Pet = Animal & {
  owner: string;
};
