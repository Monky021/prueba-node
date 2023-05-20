
export interface Payload {
    sub: number
  }

export default interface AuthService {
    signToken(payload: Payload ): string;
} 