import i18next from 'i18next';
import { ProfileService } from 'src/features/manageProfile/model/profileService/ProfileService';
import { ProfileAuthOutput } from 'src/features/manageProfile/model/profileService';
import { Profile, ProfileRole } from 'src/entities/profile/model/types';
import { AuthService } from 'src/features/manageProfile/model/profileService/rest/AuthService';
import { ErrorCode, ProfileResult, ServerErrors } from 'src/features/manageProfile/model/profileService/rest/types';

export class ProfileServiceRest implements ProfileService {
  private authService: AuthService;
  private serverUrl: string;
  private token: string;

  constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
    this.authService = new AuthService(serverUrl);
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
      .then((profileResult) => this.parseProfile(profileResult))
      .catch((reason) => reason.then((errorList) => Promise.reject(new Error(this.processErrors(errorList)))));
  }

  private auth(email: string, password: string, isRegistration: boolean): Promise<ProfileAuthOutput> {
    return (
      isRegistration ? this.authService.signup({ email, password }) : this.authService.signin({ email, password })
    )
      .then(({ profile, token }) => {
        this.token = token;
        return Promise.resolve({ profile: this.parseProfile(profile), token });
      })
      .catch((reason) => reason.then((errorList) => Promise.reject(new Error(this.processErrors(errorList)))));
  }

  private processErrors(errorResult: ServerErrors): string {
    if ('errors' in errorResult) {
      return errorResult.errors
        .reduce((error, e) => error + i18next.t(`server.${e.extensions.code}`, { ns: 'errors' }) + '\n', '')
        .trim();
    } else {
      return i18next.t(`server.${ErrorCode.ERR_UNKNOWN}`, { ns: 'errors' });
    }
  }

  private parseProfile(profile: ProfileResult): Profile {
    return {
      email: profile.email,
      nickname: profile.name,
      role: profile.email.toUpperCase().indexOf('ADMIN') >= 0 ? ProfileRole.ADMIN : ProfileRole.USER,
    };
  }
}
