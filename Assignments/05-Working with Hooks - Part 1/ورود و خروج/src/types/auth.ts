export interface Auth {
  isLoggedIn: boolean;
  userName: string;
}

export enum AuthActionType {
  LOG_IN = "LOG_IN",
  LOG_OUT = "LOG_OUT",
}

export type AuthAction =
  | {
      type: AuthActionType.LOG_IN;
      userName: string;
    }
  | {
      type: AuthActionType.LOG_OUT;
    };
