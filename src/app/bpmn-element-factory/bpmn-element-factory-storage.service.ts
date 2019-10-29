import { Injectable } from '@angular/core';
import { BpmnElement } from '../bpmn-element/bpmn-element';

@Injectable({
  providedIn: 'root'
})
export class BpmnElementFactoryStorageService {
  elements: BpmnElement[] = [];
  constructor() { }

  addElement(element: BpmnElement) {
    console.log(element);
    console.log('adding element to ');
    console.log(this.elements);
    this.elements.push(element);
  }

}
