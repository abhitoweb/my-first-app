import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[aapUnless]'
})
export class UnlessDirective {

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

  @Input() set aapUnless(condition:boolean){
    if(condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.vcRef.clear();
    }
  }

}
