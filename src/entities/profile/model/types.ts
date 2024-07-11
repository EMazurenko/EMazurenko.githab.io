export enum ProfileRole {
  ADMIN,
  USER,
}

export interface Profile {
  nickname?: string;
  about?: string;
  email: string;
  role: ProfileRole;
}
