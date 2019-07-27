import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
   allowNewServer = false;
   serverCreateStatus = 'not created';
   serverName = '';
   serverCreated = false;
   
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 10000);
   }

  ngOnInit() {
  }
onCreateServer(){
  this.serverCreated = true;
  
  this.serverCreateStatus = 'created' + this.serverName;
}
}
