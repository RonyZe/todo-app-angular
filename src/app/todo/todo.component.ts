import { Component, OnInit } from '@angular/core';
import { TODOES,TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoes: string[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.getTodoes();
  }

  addTodo(todo){
    this.todoService.addTodo(todo);
  }

  getTodoes(){
    this.todoes = this.todoService.getTodoes();
  }

  deleteTodo(index){    
    this.todoService.deleteTodo(index);
  }
}
