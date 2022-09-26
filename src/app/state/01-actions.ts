import {createAction, props} from '@ngrx/store';

export const initAction = createAction('Init app');

//je met entre parenthese(prefixe) la partie du store qui va etre affecté par l'action
// ca me permet d'avoir le meme nom de l'action, mais en precisant le store affecté.
export const changeUserName = createAction('[ROOT] Change userName', props<{username: string}>());
export const changeIsAdmin = createAction('[ROOT] change admin', props<{isAdmin: boolean}>());