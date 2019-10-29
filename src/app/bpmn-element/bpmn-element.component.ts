import { Component, OnInit } from '@angular/core';

import {Input, Output, EventEmitter} from "@angular/core";

import {BpmnElement } from './bpmn-element';

//import { MainEditorComponent } from '../main-editor/main-editor.component';


@Component({
  selector: 'app-bpmn-element',
  templateUrl: './bpmn-element.component.html',
  styleUrls: ['./bpmn-element.component.css']
})
export class BpmnElementComponent implements OnInit {
  @Input() data:number;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    //private mainEditor: MainEditorComponent
    ) { }

  dragEnd(event): void{
    console.log("ended drag with ")
    console.log(event);
    console.log("alter drag container")
  }

  displayInformations(event): void {
    console.log("infos")
    var element = event.target;
    var rect = element.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    //this.mainEditor.createElementOnEditor("normal");
    //this.notify.emit("standard")
  }

  ngOnInit() {
  }

}
