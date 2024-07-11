import { Profile, ProfileRole } from 'src/entities/profile/model/types';

export interface ProfileService {
  add: (email: string, password: string, role?: ProfileRole) => Profile;
  update: (profile: Profile) => Profile;
  check: (email: string, password: string) => Profile;
}
