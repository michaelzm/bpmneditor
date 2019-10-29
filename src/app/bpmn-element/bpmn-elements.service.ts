import { Injectable } from '@angular/core';
import { BpmnElementComponent } from './bpmn-element.component';
import { BpmnElement } from './bpmn-element';

@Injectable({
  providedIn: 'root'
})
export class BpmnElementsService {

  constructor() { }

  getElements() {
    return new BpmnElement(BpmnElementComponent, {name: 'TestActivity'});
  }
}
