type Character = {
  name: string;
  health: number;
};

type Player = Character & {
  level: number;
  damage: number;
};
type Enemy = Character & {
  level: number;
  damage: number;
};
