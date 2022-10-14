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
  list:any[]=[];
  resetForm: HTMLFormElement = <HTMLFormElement>document.getElementById('bo');
  add(item:String)
    {
      
this.list.push({item});
console.log(this.list)

  }
  remove(i:number)
  {
this.list.splice(i,1);
  }
  reset(){
    if(this.resetForm)
      this.resetForm.reset();
  }
}

