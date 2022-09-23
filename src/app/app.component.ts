import { Component, OnInit } from '@angular/core';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { initAction, changeUserName } from './state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'starter';
  public user$: Observable<any> = {} as Observable<any>;

  ngOnInit(): void {
    this.store.dispatch(initAction())
    //premiere technique pour utilisé le selector et affiché les données
    //this.user$ =this.store.select((state:any) => state.root.user)

    //deuxieme technique avec le select de ngrx
    this.user$ = this.store.pipe(
      //en mettant root et user dans les tableaux, j'ai accès à leurs clés. c'est pas top top 
      select((state:any) => state['root']['user'])
    );

  }

  constructor(private store: Store){

  }

  public changeUserName(): void {
    this.store.dispatch(changeUserName({username: `coulisse ${Math.random()}`}));
  }



}
