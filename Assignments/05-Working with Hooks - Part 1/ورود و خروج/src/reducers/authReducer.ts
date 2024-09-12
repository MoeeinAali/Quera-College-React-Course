import {Auth, AuthAction, AuthActionType} from "../types/auth";

export function authReducer(auth: Auth, action: AuthAction): Auth {
    switch (action.type) {
        case AuthActionType.LOG_IN: {
            return {
                isLoggedIn: true,
                userName: action.userName,
            } as Auth;
        }
        case AuthActionType.LOG_OUT: {
            return {
                isLoggedIn: false,
                userName: "",
            } as Auth;
        }
        default: {
            return auth as Auth;
        }
    }
}
