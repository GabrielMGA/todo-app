import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle, editar, borrar, toggleAll, cleanCompletes } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán América'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { text }) => [...state, new Todo(text)]),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complet: !todo.complet,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { complet }) =>
    state.map((todo) => {
      return {
        ...todo,
        complet,
      };
    })
  ),
  on(editar, (state, { id, text }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          text,
        };
      } else {
        return todo;
      }
    });
  }),
  on(cleanCompletes, (state) => state.filter(todo => !todo.complet))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
