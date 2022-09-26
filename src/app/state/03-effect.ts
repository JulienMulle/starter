import { Injectable } from "@angular/core";
import * as UserActions from './01-actions';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap, mergeMap, map } from "rxjs";
import { UsersService } from '../service/users/users.service';
import { User } from "../models/user.model";



@Injectable()
export class AppEffects {
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            tap((val)=> console.log('action: ',val)),
            ofType(UserActions.loadUsers),
            mergeMap(action => this.usersService.getUsers().pipe(
                map((users: User[])=> UserActions.loadUersSuccess({users}))
            ) )
        )
    );

    constructor(private actions$: Actions, private usersService: UsersService ) {

    }
}