import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[elements-host]',
})
export class ElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
