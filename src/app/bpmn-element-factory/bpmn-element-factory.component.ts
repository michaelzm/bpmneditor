import { Component, OnInit} from '@angular/core';

import { BpmnElementComponent } from '../bpmn-element/bpmn-element.component';
import { MOCKBPMNELEMENT } from '../bpmn-element/mock-bpmn-element-storage';
import { BpmnElementFactoryStorageService } from './bpmn-element-factory-storage.service';


/**
 * This factory produces the different kinds of bpmn elements, should not be a component
 */
@Component({
  selector: 'app-bpmn-element-factory',
  templateUrl: './bpmn-element-factory.component.html',
  styleUrls: ['./bpmn-element-factory.component.css']
})
export class BpmnElementFactoryComponent implements OnInit {
  public storage: number[] = [1, 2, 512, 6121, 82, 1, 2, 41, 25, 1];
  constructor(
    private storageService: BpmnElementFactoryStorageService) {}

  ngOnInit() {
    console.log();
  }

  createElementFromType(type: string) {
    switch (type) {
      case 'activity':

    }
    console.log('creating element in factory');
    console.log(this.storage);
    this.storage.push(99);
    this.storage = [...this.storage];
  }

  set newStorageValue(newValue) {
      this.storage.push(newValue);
  }

  get storageValue() {
    return this.storage;
  }
}
