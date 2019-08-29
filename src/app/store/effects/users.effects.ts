import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, mergeMap, catchError } from 'rxjs/operators';

import * as usersActions from '../actions';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
  constructor(private actions$: Actions, public usersService: UserService) {}

  // @Effect({ dispatch: false }) // Cant dispatch new effects
  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(usersActions.LOAD_USERS),
    switchMap(() => {
      return this.usersService.getUsers().pipe(
        map(users => {
          return new usersActions.LoadUsersOK([...users]);
        }),
        catchError(error => {
          return of(new usersActions.LoadUsersKO(error));
        })
      );
    })
  );
}
