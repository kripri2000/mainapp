import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  todo:any[]=[];
  dateArr:any[]=[];
  add(item:String,date:any,idTodo:any,idDate:any)
    {
      if(item != ''&& date != '' ){
        this.todo.push({item});
        this.dateArr.push({date});
        idTodo.value = '';
        idDate.value = '';
        //this.list.push({date});
        //console.log(this.list);
      }
      else
        alert("Task or date is missing");

  }
  remove(i:number)
  {
    this.todo.splice(i,1);
    this.dateArr.splice(i,1);
  }
  
}

