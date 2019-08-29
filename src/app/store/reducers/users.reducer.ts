import { User } from '../../models/user.model';
import * as fromUsers from '../actions';
import { usersActions } from '../actions/users.actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const usersInitState: UsersState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
};

export function usersReducer(state: UsersState = usersInitState, action: fromUsers.usersActions): UsersState {
  switch (action.type) {
    case fromUsers.LOAD_USERS:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromUsers.LOAD_USERS_OK:
      return {
        ...state,
        loading: false,
        loaded: true,
        users: [...action.users]
      };
    case fromUsers.LOAD_USERS_KO:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: {
          status: action.payload.status,
          message: action.payload.message,
          url: action.payload.url
        }
      };

    default:
      return state;
  }
}
