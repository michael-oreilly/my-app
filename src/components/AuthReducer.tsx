interface AuthState {
  currentUser: any;
}

interface AuthAction {
  type: string;
  payload?: any;
}

export const AuthReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "LOGIN": {
      return { currentUser: action.payload };
    }
    case "LOGOUT": {
      return { currentUser: null };
    }
    default:
      return state;
  }
};
