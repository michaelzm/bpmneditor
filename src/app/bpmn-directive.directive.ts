import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bpmn-element-host]'
})
export class BpmnDirectiveDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
