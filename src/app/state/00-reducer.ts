import { Action, ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import { RootActions } from './01-actions';

export const ROOT_FEATURE_KEY = 'root';


export interface State {
    readonly[ROOT_FEATURE_KEY]: RootState;
}

export interface RootState{
    appName: string;
    user: User;
}

const initialState: RootState = {
    // as et une insertion des types
    appName: 'NgRx',
    user: {
        username: '',
        isAdmin: false
    }
};

function log(reducer: ActionReducer<State>): ActionReducer<State>{
    return(state, action) => {
        const currentState = reducer(state, action);

        console.groupCollapsed(action.type)
        console.log('etat precedent:', state);
        console.log('Action', action);
        console.log('etat suivant:', currentState);
        console.groupEnd()
        return currentState;
    }
}

export const metaReducers: MetaReducer[] = [log];

export const rootReducer = createReducer<RootState, Action>(initialState,
    on(RootActions.initApp, (state:RootState) =>{
        return {
            // copie du state
            ...state, 
            user: {
                ... state.user,
                isAdmin: true
            }
        }
    }),
    on(RootActions.changeUsername, (state:RootState, props)=> {
        return{
            ... state, 
            user: {
                //je copie tout le state du user
                ...state.user,
                //je rajoute ce qui sera modifier
                username: props.username
            }
        }
    })
    );

