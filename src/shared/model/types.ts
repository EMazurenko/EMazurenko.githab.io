export interface BaseEntity {
  id: string;
  name: string;
}

export interface Pos {
  top: number;
  left: number;
}

export type AuthPair = {
  email: string;
  password: string;
};
