import { Injectable } from '@angular/core';
import { BpmnElementComponent } from './bpmn-element.component';
import { BpmnElement } from './bpmn-element';

@Injectable({
  providedIn: 'root'
})
export class BpmnElementsService {
public elements: BpmnElement[] = [];

  constructor() {
    this.addElement('activity');
   }

  addElement(type: string) {
    this.elements.push(new BpmnElement(BpmnElementComponent, 'activity', {data: type}));
    console.log('added element to existing array');
    console.log(this.elements);
  }

  getElements() {
    return this.elements[0];
  }
}
