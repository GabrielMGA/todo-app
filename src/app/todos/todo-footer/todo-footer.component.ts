import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from '../../filter/filtro.actions';
import { cleanCompletes } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: filtrosValidos = 'todos';
  filters: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store
    //   .select('filter')
    //   .subscribe((filter) => (this.currentFilter = filter));

    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendientes = state.todos.filter(todo => !todo.complet).length;
    });
  }

  changeFilter(filtro: filtrosValidos): void {
    this.store.dispatch(setFiltro({ filtro }));
  }

  cleanCompletes(): void {
    this.store.dispatch(cleanCompletes());
  }
}
