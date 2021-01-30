import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crea todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggles todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number; text: string }>()
);

export const borrar = createAction(
  '[TODO] Borrar todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TODO] ToggleAll todo',
  props<{ complet: boolean }>()
);

export const cleanCompletes = createAction(
  '[TODO] CleanCompletes todo'
);
