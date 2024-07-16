import { Profile, ProfileRole } from 'src/entities/profile/model/types';

export type ProfileAuthOutput = {
  profile: Profile;
  token: string;
};

export interface ProfileService {
  add: (email: string, password: string, role?: ProfileRole) => Promise<ProfileAuthOutput>;
  update: (profile: Profile) => Promise<Profile>;
  check: (email: string, password: string) => Promise<ProfileAuthOutput>;
}
