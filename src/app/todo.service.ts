import { Injectable } from '@angular/core';


// Demo or Seed Todoes
export const TODOES = [  
  "Hello Todo"
];

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoes: string[];

  constructor() { }

  addTodo(todo:string){
    this.todoes.push(todo);
  }

  deleteTodo(index:number){
    this.todoes.splice(index,1);
  }

  getTodoes():string[]{
    this.todoes = TODOES;
    return this.todoes;
  }
  
}

