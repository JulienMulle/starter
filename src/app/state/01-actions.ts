import {createAction, createActionGroup, props, emptyProps} from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';



export const RootActions = createActionGroup({
    source: 'ROOT', 
    events: {
        'Init app': emptyProps(),
        'Change userName': props<{username: string}>(),
        'change admin': props<{isAdmin: boolean}>()
    }
})

export const loadUsers = createAction('[User API] load users');
export const loadUersSuccess = createAction('[User API] load users success', props<{users: User[]}>());
export const loadUsersFAillure = createAction('[User API] load users failure', props<{error: HttpErrorResponse | Error }>());