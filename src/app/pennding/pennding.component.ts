import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';


@Component({
  selector: 'app-pennding',
  templateUrl: './pennding.component.html',
  styleUrls: ['./pennding.component.css']
})
export class PenndingComponent implements OnInit {
  // serverId: number = 10;
  // serverName: string = 'offline';
  tasks: Task[]= [
    new Task('Hello')
  ];
  constructor() { }

  ngOnInit() {
  }

  // getServerStatus(){
  //   return this.serverName;
  // }

}
