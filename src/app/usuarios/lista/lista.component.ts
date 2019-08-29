import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usersActions from '../../store/actions';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usersSubscription: Subscription = new Subscription();
  users: User[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>, private router: Router) {}
  // constructor(private userService: UserService) {}

  ngOnInit() {
    this.store.dispatch(new usersActions.LoadUsers());
    this.usersSubscription = this.store.select('users').subscribe(res => {
      this.users = res.users;
      this.loading = res.loading;
      this.error = res.error;
    });
  }

  ngOnDestroy() {
    this.usersSubscription.unsubscribe();
  }

  openUser(user: User) {
    console.log('user selected::', user);
    this.router.navigate(['/usuario', user.id]);
  }
}
