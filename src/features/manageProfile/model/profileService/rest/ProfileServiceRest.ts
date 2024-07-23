import { ProfileService } from 'src/features/manageProfile/model/profileService/ProfileService';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { AuthService } from 'src/features/manageProfile/model/profileService/rest/AuthService';
import { ProfileResult } from 'src/features/coreService/model/types';

export class ProfileServiceRest implements ProfileService {
  private readonly authService: AuthService;
  private readonly serverUrl: string;
  private readonly commandId: string;
  private token: string;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
    this.authService = new AuthService(serverUrl, commandId);
  }

  add(email: string, password: string): Promise<ProfileAuthOutput> {
    return this.auth(email, password, true);
  }

  check(email: string, password: string): Promise<ProfileAuthOutput> {
    return this.auth(email, password, false);
  }

  update(profile: Profile): Promise<Profile> {
    return fetch(`${this.serverUrl}/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${this.token}`,
      },
      body: JSON.stringify({ name: profile.nickname }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        else return Promise.reject(response.json());
      })
      .then((profileResult) => this.parseProfile(profileResult));
  }

  private auth(email: string, password: string, isRegistration: boolean): Promise<ProfileAuthOutput> {
    return (
      isRegistration ? this.authService.signup({ email, password }) : this.authService.signin({ email, password })
    ).then(({ profile, token }) => {
      this.token = token;
      return Promise.resolve({ profile: this.parseProfile(profile), token });
    });
  }

  private parseProfile(profile: ProfileResult): Profile {
    return {
      email: profile.email,
      nickname: profile.name,
      role: profile.email.toUpperCase().indexOf('ADMIN') >= 0 ? ProfileRole.ADMIN : ProfileRole.USER,
    };
  }
}
