export interface Message {
  message: string;
}


export interface LoginDataDto {
  email: string;
  password: string;
}


export interface LoginResultDto {
  ok: boolean;
  message?: string;

  displayName?: string;
  idToken?: string;

  expiresIn?: Date;
}


export const HEADER_AUTHORIZATION = 'authorization';
