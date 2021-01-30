import { Todo } from './todos/models/todo.model';
import { filtroReducer } from './filter/filter.reducer';
import { todoReducer } from './todos/todo.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filter/filtro.actions';

export interface AppState {
  todos: Todo[];
  filter: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filtroReducer,
};
