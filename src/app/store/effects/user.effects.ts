import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as userActions from '../actions';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, public usersService: UserService) {}

  // @Effect({ dispatch: false }) // Cant dispatch new effects
  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.LOAD_USER),
    switchMap(action => {
      const id: number = action['id'];
      return this.usersService.getUserById(id).pipe(
        map(user => {
          return new userActions.LoadUserOK({ ...user });
        }),
        catchError(error => {
          return of(new userActions.LoadUserKO(error));
        })
      );
    })
    // switchMap((action: userActions.LoadUser) => {
    //   return this.usersService.getUserById(action.id).pipe(
    //     map(user => {
    //       return new userActions.LoadUserOK({ ...user });
    //     }),
    //     catchError(error => {
    //       return of(new userActions.LoadUserKO(error));
    //     })
    //   );
    // })
  );
}
