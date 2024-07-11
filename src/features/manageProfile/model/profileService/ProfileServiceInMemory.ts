import { ProfileService } from './ProfileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import i18next from 'i18next';

type ProfileWithPassword = Profile & { password: string };
type ProfileStoreType = { [email: string]: ProfileWithPassword };

export class ProfileServiceInMemory implements ProfileService {
  private profileStore: ProfileStoreType = {
    'admin@email.ru': { email: 'admin@email.ru', role: ProfileRole.ADMIN, password: 'password' },
  };

  add(email: string, password: string, role: ProfileRole = ProfileRole.USER): Profile {
    if (this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileExits', `Профиль с email [${email}] уже существует.`, { ns: 'errors', email })
      );
    }
    const storedProfile = { email, password, role };
    this.profileStore[email] = storedProfile;
    return storedProfile as Profile;
  }

  check(email: string, password: string): Profile {
    if (!this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileNotExits', `Профиль с email [${email}] не существует.`, { ns: 'errors', email })
      );
    } else {
      const profile = this.profileStore[email];
      if (profile.password !== password) {
        throw new Error(i18next.t('authorization.passwordIncorrect', 'Неверный пароль', { ns: 'errors' }));
      }
      return profile as Profile;
    }
  }

  update(profile: Profile): Profile {
    const email = profile.email;
    if (!this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileNotExits', `Профиль с email [${email}] не существует.`, { ns: 'errors', email })
      );
    }
    let updatedProfile = this.profileStore[email];
    updatedProfile = { ...updatedProfile, ...profile };
    this.profileStore[email] = updatedProfile;
    return updatedProfile as Profile;
  }

  private exists(email: string): boolean {
    return email in this.profileStore;
  }
}
