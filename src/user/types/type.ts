export interface User {
  userName: string;
  phoneNumber: string;
  email: string;
  password: string;
  latitude?: number;
  longitude?: number;
}


export type VerifyPayload = {
  email: string;
  code: string;
};