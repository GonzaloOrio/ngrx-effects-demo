import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOAD_USERS = '[Users] Load Users';
export const LOAD_USERS_OK = '[Users] Load Users OK';
export const LOAD_USERS_KO = '[Users] Load Users KO';

export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersOK implements Action {
  readonly type = LOAD_USERS_OK;
  constructor(public users: User[]) {}
}

export class LoadUsersKO implements Action {
  readonly type = LOAD_USERS_KO;
  constructor(public payload: any) {}
}

export type usersActions = LoadUsers | LoadUsersOK | LoadUsersKO;
