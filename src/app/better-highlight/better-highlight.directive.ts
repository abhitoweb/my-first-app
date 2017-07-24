import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('defaultColor') defaultColor = 'transparent';
  @Input('highlightColor') highlightColor = 'pink';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;  

  constructor(private elRef:ElementRef, private renderer: Renderer2) { console.log("const")}
  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
    this.backgroundColor=this.defaultColor;
     console.log("ngOnInit")
  }
  @HostListener('mouseover') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink')
    this.backgroundColor=this.highlightColor;
  }
  @HostListener('mouseleave') ABC(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor=this.defaultColor;
  }
}
