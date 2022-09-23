import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
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
    this.user$ =this.store.select((state:any) => state.root.user)
  }

  constructor(private store: Store){

  }

  public changeUserName(): void {
    this.store.dispatch(changeUserName({username: `coulisse ${Math.random()}`}));
  }



}
