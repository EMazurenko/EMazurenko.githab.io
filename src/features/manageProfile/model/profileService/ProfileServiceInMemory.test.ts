import { ProfileService } from 'src/features/manageProfile/model/profileService/ProfileService';
import { ProfileServiceInMemory } from 'src/features/manageProfile/model/profileService/ProfileServiceInMemory';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';

describe('ProfileServiceInMemory', () => {
  const existsProfile = {
    email: 'admin@email.ru',
    password: 'password',
    role: ProfileRole.ADMIN,
  };
  const newProfile = {
    email: 'emai@email.ru',
    password: '12345678',
    role: ProfileRole.USER,
  };
  let profileService: ProfileService;

  beforeEach(() => {
    profileService = new ProfileServiceInMemory();
  });

  it('should success add on not exists email', () => {
    const profile = profileService.add(newProfile.email, newProfile.password, newProfile.role);
    expect(profile.email).toBe(newProfile.email);
    expect(profile.role).toBe(newProfile.role);
  });

  it('should error add on exists email', () => {
    expect(() => {
      profileService.add(existsProfile.email, existsProfile.password);
    }).toThrow();
  });

  it('should success check on exists email and correct password', () => {
    const profile = profileService.check(existsProfile.email, existsProfile.password);
    expect(profile.email).toBe(existsProfile.email);
    expect(profile.role).toBe(existsProfile.role);
  });

  it('should error check on not exists email', () => {
    expect(() => {
      profileService.check(newProfile.email, newProfile.password);
    }).toThrow();
  });

  it('should error check on exists email and incorrect password', () => {
    expect(() => {
      profileService.check(existsProfile.email, newProfile.password);
    }).toThrow();
  });

  it('should success update on exists email', () => {
    const profile = profileService.update({ ...existsProfile, nickname: 'admin', about: 'about' } as Profile);
    expect(profile.email).toBe(existsProfile.email);
    expect(profile.nickname).toBe('admin');
    expect(profile.about).toBe('about');
  });

  it('should error update on not exists email', () => {
    expect(() => {
      profileService.update({ ...newProfile, nickname: 'new', about: 'about' } as Profile);
    }).toThrow();
  });
});
