import { createSelector, createFeatureSelector } from "@ngrx/store";
import { State, RootState, ROOT_FEATURE_KEY } from './00-reducer';


//createFeatureSelector va chercher la clés qui correspond à ce qu'on lui a mis en parametre ici c'est root
const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY);
export const getUser = createSelector(selectRoot, (state: RootState)=> state.user);