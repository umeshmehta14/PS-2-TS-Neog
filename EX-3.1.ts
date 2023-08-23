interface UserProfile {
  username: string;
  age: number;
  friends: string[];
  address: {
    street: string;
    city: string;
  };
  isPremium: boolean;
  ratings: number[];
  latestActivity: string;
}
