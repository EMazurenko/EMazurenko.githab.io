import { AuthResult, SignBody } from 'src/features/manageProfile/model/profileService/rest/types';

export class AuthService {
  private static readonly COMMAND_ID = '202402_MAZURENKO_EV';
  private serverUrl: string;

  constructor(serverUrl: string) {
    this.serverUrl = serverUrl;
  }

  signup(request: SignBody): Promise<AuthResult> {
    return this.fetch('signup', { ...request, commandId: AuthService.COMMAND_ID });
  }

  signin(request: SignBody): Promise<AuthResult> {
    return this.fetch('signin', request);
  }

  private fetch(endpoint: string, request: SignBody): Promise<AuthResult> {
    return fetch(`${this.serverUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(request),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response.json());
      }
    });
  }
}
