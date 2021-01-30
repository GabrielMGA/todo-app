import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completes: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll(): void {
    this.completes = !this.completes;
    this.store.dispatch(toggleAll({ complet: this.completes }));
  }
}
