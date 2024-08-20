import { ProfileAuthOutput, ProfileService } from '../ProfileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import i18next from 'i18next';

type ProfileWithPassword = Profile & { password: string };
type ProfileStoreType = { [email: string]: ProfileWithPassword };

export class ProfileServiceInMemory implements ProfileService {
  private static readonly ADMIN_EMAIL: string = 'admin@email.ru';
  private profileStore: ProfileStoreType = {};

  constructor() {
    this.profileStore[ProfileServiceInMemory.ADMIN_EMAIL] = {
      email: ProfileServiceInMemory.ADMIN_EMAIL,
      role: ProfileRole.ADMIN,
      password: 'password',
    };
  }

  add(email: string, password: string, role: ProfileRole = ProfileRole.USER): Promise<ProfileAuthOutput> {
    if (this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileExits', `Профиль с email [${email}] уже существует.`, { ns: 'errors', email })
      );
    }
    const storedProfile = { email, password, role };
    this.profileStore[email] = storedProfile;
    return Promise.resolve<ProfileAuthOutput>({
      profile: storedProfile,
      token: Math.random().toString(16),
    });
  }

  check(email: string, password: string): Promise<ProfileAuthOutput> {
    if (!this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileNotExits', `Профиль с email [${email}] не существует.`, { ns: 'errors', email })
      );
    } else {
      const profile = this.profileStore[email];
      if (profile.password !== password) {
        throw new Error(i18next.t('authorization.passwordIncorrect', 'Неверный пароль', { ns: 'errors' }));
      }
      return Promise.resolve<ProfileAuthOutput>({
        profile,
        token: Math.random().toString(16),
      });
    }
  }

  update(profile: Profile): Promise<Profile> {
    const email = profile.email;
    if (!this.exists(email)) {
      throw new Error(
        i18next.t('authorization.profileNotExits', `Профиль с email [${email}] не существует.`, { ns: 'errors', email })
      );
    }
    let updatedProfile = this.profileStore[email];
    updatedProfile = { ...updatedProfile, ...profile };
    this.profileStore[email] = updatedProfile;
    return Promise.resolve<Profile>(updatedProfile);
  }

  get(): Promise<Profile> {
    return Promise.resolve<Profile>(this.profileStore[ProfileServiceInMemory.ADMIN_EMAIL]);
  }

  private exists(email: string): boolean {
    return email in this.profileStore;
  }
}
