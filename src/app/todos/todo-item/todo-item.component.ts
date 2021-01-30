import { Todo } from './../models/todo.model';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { toggle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  chkComplete: FormControl;
  txtIput: FormControl;
  editing: boolean = false;

  @ViewChild('inputFisico') txtInputFisico: ElementRef;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.complet);
    this.txtIput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe((valor) => {
      console.log(valor);
      this.store.dispatch(toggle({ id: this.todo.id }));
    });
  }

  edit(): void {
    this.editing = true;
    this.txtIput.setValue(this.todo.text);

    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  endEdit(): void {
    this.editing = false;

    if (this.txtIput.invalid) {
      return;
    }

    if (this.txtIput.value === this.todo.text) {
      return;
    }

    this.store.dispatch(
      editar({
        id: this.todo.id,
        text: this.txtIput.value,
      })
    );
  }

  delete(): void {
    this.store.dispatch(borrar({ id: this.todo.id }));
  }
}
