import { Component } from '@angular/core';
import {LocalstorageService} from './localstorage.service';

@Component({
  moduleId: module.id,
  selector: 'ng2todo-app',
  templateUrl: 'ng2todo.component.html',
  styleUrls: ['ng2todo.component.css'],
  providers: [LocalstorageService]
})
export class Ng2todoAppComponent {
  todoList;
  showSaveTodoBtn;
  formKey;
  constructor(private _lsdata:LocalstorageService) {}

  ngOnInit() {
    this.formKey = 'todoList';
    this.showSaveTodoBtn = [];
    this.todoList = this._lsdata.getData(this.formKey);
  }
  addTodo(todoItem) {
    this.todoList.push(todoItem);
    this._lsdata.setData(this.formKey, this.todoList);
  }
  removeTodo(index) {
    this.todoList.splice(index, 1);
    this._lsdata.setData(this.formKey, this.todoList);
  }
  editTodo(index, item) {
    this.todoList[index] = item.replace(/^\s+|\s+$/g,''); // remove trailing spaces
    this.showSaveTodoBtn[index] = false;
    this._lsdata.setData(this.formKey, this.todoList);
  }
  displaySaveTodo(index) {
    this.showSaveTodoBtn[index] = true;
  }
  hideSaveTodo(index) {
    this.showSaveTodoBtn[index] = false;
  }
}
