import {createAction, props} from '@ngrx/store';

export const initAction = createAction('Init app');

export const changeUserName = createAction('Change userName', props<{username: string}>());