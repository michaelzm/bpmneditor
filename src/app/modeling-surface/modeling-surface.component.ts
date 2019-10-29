import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';

// contains view ref, adds elements to main-editor container
import { ElementDirective } from '../main-editor/element-container.directive';

import { BpmnElement } from '../bpmn-element/bpmn-element';

import { BpmnElementComponent } from '../bpmn-element/bpmn-element.component';

import { BpmnElementsService } from '../bpmn-element/bpmn-elements.service';


@Component({
  selector: 'app-modeling-surface',
  template: `
          <div class = "elements">
            <ng-template elements-host></ng-template>
            <button (click) = "loadComponent()"></button>
          </div>
            `,
  styleUrls: ['./modeling-surface.component.css']
})
export class ModelingSurfaceComponent implements OnInit {
  @Input() bpmnElements: BpmnElement;
  @ViewChild(ElementDirective, {static: true}) elementsHost: ElementDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private elementsService: BpmnElementsService) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const adItem = this.bpmnElements;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.elementsHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    // (<ElementDirective>componentRef.instance).data = adItem.data;
  }

  loadCustomComponent() {
    const adItem = this.elementsService.getElements();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.elementsHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }


}
