interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (profile: Profile, updateValue: Partial<Profile>) => {
  return { ...profile, ...updateValue };
};
