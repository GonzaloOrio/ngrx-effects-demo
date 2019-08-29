import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as userActions from '../../store/actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {
  userSubscription: Subscription = new Subscription();
  user: User;
  loading: boolean;
  error: any;

  constructor(private router: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.store.dispatch(new userActions.LoadUser(id));
    });

    this.userSubscription = this.store.select('user').subscribe(res => {
      this.user = res.user;
      this.loading = res.loading;
      this.error = res.error;
    });
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}
