import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[elements-host]',
})
export class ElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
