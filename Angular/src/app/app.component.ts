import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  tasks: any[] = [];
  taskDetail: any = {};

  constructor(private _httpService: HttpService){}
  
  ngOnInit(){
  }

  getTasksFromService(){
        this._httpService.getTasks()
        .subscribe((data:any)=>{
          this.tasks = data;          
        });
  }

  getTasksByID(event:any):void{
      event.preventDefault();
      let id = event.target.id.value;
      this._httpService.getTaskbyId(id)
      .subscribe((data:any)=>{
        this.taskDetail = data;        
      });  
  }
}