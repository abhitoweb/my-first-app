import { Component, OnInit, Input,ViewEncapsulation ,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation:ViewEncapsulation.Emulated //None, Nativex
})
export class ServersComponent implements OnInit {
//*****************data members*****************
// num = 2;
allowNewServer = false;
serverCreationStatus = "No server created"
// serverName = "Test Server";
serverCreated = false;
 servers = [{name:"Abhi",content:"work work work!"} ];
 @ViewChild('serverContentInput')serverContentInput :ElementRef;
//*************functions********************
  constructor() { 
    setTimeout(() =>{this.allowNewServer=true},2000);
  }
   ngOnInit() {
    
  }
  onServerCreation(serverNameInput:HTMLInputElement){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Named as : "+serverNameInput.value;
    this.servers.push( {name: serverNameInput.value,    content: this.serverContentInput.nativeElement.value} );
  }
  
  onServerDelete(serverDelete1:{index:number, deletedServerName}){
    this.servers.splice(serverDelete1.index,1);
    this.serverCreationStatus =serverDelete1.deletedServerName.name +" Server was deleted";
  }
  onChangeFirst(){
    if(this.servers.length>1)
      this.servers[0].name = 'Changed!';
  }
 
// onUpdatedServerName(event:Event,serverNameInput){
  //   console.log(event);
  //   serverNameInput.value = (<HTMLInputElement>event.target).value;
  // }
}
