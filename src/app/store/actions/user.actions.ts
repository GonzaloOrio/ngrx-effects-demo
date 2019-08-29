import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOAD_USER = '[User] Load User';
export const LOAD_USER_OK = '[User] Load User OK';
export const LOAD_USER_KO = '[User] Load User KO';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public id: string) {}
}

export class LoadUserOK implements Action {
  readonly type = LOAD_USER_OK;
  constructor(public user: User) {}
}

export class LoadUserKO implements Action {
  readonly type = LOAD_USER_KO;
  constructor(public payload: any) {}
}

export type userActions = LoadUser | LoadUserOK | LoadUserKO;
