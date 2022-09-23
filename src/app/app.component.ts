import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { initAction, changeUserName } from './state/01-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'starter';

  ngOnInit(): void {
    this.store.dispatch(initAction())
  }

  constructor(private store: Store){

  }

  public changeUserName(): void {
    this.store.dispatch(changeUserName({username: `coulisse ${Math.random()}`}));
  }

}
