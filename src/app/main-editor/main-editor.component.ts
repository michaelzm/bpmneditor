import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { BpmnElementsService } from '../bpmn-element/bpmn-elements.service';

import { BpmnElement } from '../bpmn-element/bpmn-element';


@Component({
  selector: 'app-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css']
})
export class MainEditorComponent implements OnInit {

  bpmnElements: BpmnElement; // has to be array later

  constructor(private bpmnElementsService: BpmnElementsService) {
   }

  ngOnInit() {
    this.bpmnElements = this.bpmnElementsService.getElements();
  }

}
