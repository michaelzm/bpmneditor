import { Component, OnInit } from '@angular/core';

import {Output, EventEmitter} from '@angular/core';

import {BpmnElement } from './bpmn-element';

// import { MainEditorComponent } from '../main-editor/main-editor.component';


@Component({
  selector: 'app-bpmn-element',
  templateUrl: './bpmn-element.component.html',
  styleUrls: ['./bpmn-element.component.css']
})
export class BpmnElementComponent implements OnInit {

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    // private mainEditor: MainEditorComponent
    ) { }

  dragStart(event): void {
    console.log(event);
  }

  dragEnd(event): void {
    const element = event.source.element.nativeElement;
    console.log('ended drag with ');
    console.log(element);
    console.log(event);

    console.log('alter drag container');
  }

  displayInformations(event): void {
    console.log('infos')
    var element = event.target;
    const rect = element.getBoundingClientRect();
    // rect.top = 1000;
    console.log(element.style.transform);
    // element.style.transform = "translate3d(500px,500px,0px)";
    if (element.classList.contains('bpmn-element-title')) {
      console.log('is title');
      element = element.parentElement;
    }
    element.style.left = '500px';
    element.style.top = '500px';
    element.style.position = 'absolute';
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    // this.mainEditor.createElementOnEditor("normal");
    // this.notify.emit("standard")
  }

  ngOnInit() {
  }

}
