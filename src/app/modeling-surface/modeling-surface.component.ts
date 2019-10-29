import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver} from '@angular/core';

// contains view ref
import { ElementDirective } from '../main-editor/element-container.directive';

import { BpmnElement } from '../bpmn-element/bpmn-element';

import { BpmnElementComponent } from '../bpmn-element/bpmn-element.component';


@Component({
  selector: 'app-modeling-surface',
  template: `
          <div class = "elements">
            <p>einzelne elemente</p>
            <ng-template elements-host></ng-template>
            <button (click) = "loadComponent()"></button>
          </div>
            `,
  styleUrls: ['./modeling-surface.component.css']
})
export class ModelingSurfaceComponent implements OnInit {
  @Input() bpmnElements: BpmnElement;
  @ViewChild(ElementDirective, {static: true})adHost: ElementDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const adItem = this.bpmnElements;

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<ElementDirective>componentRef.instance).data = adItem.data;
  }


}
