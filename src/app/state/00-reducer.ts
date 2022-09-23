import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { initAction, changeUserName } from './01-actions';

const initialState = {
    appName: 'NgRx',
    user: {
        username: '',
        isAdmin: false
    }
};

function log(reducer: ActionReducer<any>): ActionReducer<any>{
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

export const rootReducer = createReducer(initialState,
    on(initAction, (state) =>{
        return {
            // copie du state
            ...state, 
            user: {
                ... state.user,
                isAdmin: true
            }
        }
    }),
    on(changeUserName, (state, props)=> {
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

