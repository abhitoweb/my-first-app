import { 
    Component,
    OnInit,
    Input, 
    EventEmitter, 
    Output,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy } from '@angular/core';
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:['.online{ color: white}']

})
export class ServerComponent implements 
OnInit, 
OnChanges, 
DoCheck,
AfterContentInit,
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy{
//*****************data members*****************
 serverId: number = 10;
 serverStatus: string = Math.random()>0.5?'online':'offline';
 @Input('srvElement') server_ele;
 @Input() name;
 @Input() index;
 @Output()serverDelete = new EventEmitter<{index:number, deletedServerName}>();
 //*************functions********************
 constructor() { 
     console.log("server Constructor called!");
 }
 ngOnInit() {
    console.log("server ngOnInit called!");
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("server ngOnChanges called!");
    console.log(changes);
  }
  ngDoCheck(){
      console.log("server ngDoCheck called!");
  }
  ngAfterContentInit(){
      console.log("server ngAfterContentInit called!");
  }
  ngAfterContentChecked(){
      console.log("server ngAfterContentChecked called!");
  }
  ngAfterViewInit(){
      console.log("server ngAfterViewInit called!");
  }
  ngAfterViewChecked(){
      console.log("server ngAfterViewChecked called!");
  }
  ngOnDestroy(){
      console.log("server ngOnDestroy called!");
  }
 getServerStatus(){
     return this.serverStatus;
 }
getColor(){
     return this.serverStatus=='offline'?'red':'green';
 }
 onServerDelete(){
     this.serverDelete.emit({index:this.index, deletedServerName:this.server_ele});
 }
}