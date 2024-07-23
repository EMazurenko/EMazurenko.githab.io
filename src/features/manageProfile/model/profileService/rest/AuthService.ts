import { AuthResult, SignBody } from 'src/features/coreService/model/types';

export class AuthService {
  private readonly serverUrl: string;
  private readonly commandId: string;

  constructor(serverUrl: string, commandId: string) {
    this.serverUrl = serverUrl;
    this.commandId = commandId;
  }

  signup(request: SignBody): Promise<AuthResult> {
    return this.fetch('signup', { ...request, commandId: this.commandId });
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
