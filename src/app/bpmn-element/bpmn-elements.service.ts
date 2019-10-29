import { Injectable } from '@angular/core';
import { MOCKBPMNELEMENT } from './mock-bpmn-element-storage';

@Injectable({
  providedIn: 'root'
})
export class BpmnElementsService {

  constructor() { }

  getElement() {
    return MOCKBPMNELEMENT;
  }
}
