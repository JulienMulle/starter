import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import { State } from './state/00-reducer';
import { RootActions } from './state/01-actions';
//import * as RootActions from './state/01-actions';
import { getUser } from './state/02-selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'starter';
  public user$: Observable<User> = {} as Observable<User>;

  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp())
    //premiere technique pour utilisé le selector et affiché les données
    //this.user$ =this.store.select((state:any) => state.root.user)

    //deuxieme technique avec le select de ngrx
    this.user$ = this.store.pipe(
      select(getUser)
    );
    this.http.get('api/users').subscribe(val => console.log(val))
  }

  constructor(private store: Store<State>, private http: HttpClient){

  }

  public changeUserName(): void {
    this.store.dispatch(RootActions.changeUsername({username: `coulisse ${Math.random()}`}));
    this.store.dispatch(RootActions.changeAdmin({isAdmin: false}))
  }



}
