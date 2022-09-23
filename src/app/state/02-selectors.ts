import { createSelector } from "@ngrx/store";
import { State, RootState } from './00-reducer';

const selectRoot = (state:State)=> state.root;
export const getUser = createSelector(selectRoot, (state: RootState)=> state.user);