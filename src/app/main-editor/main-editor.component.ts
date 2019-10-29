import { Component, OnInit } from '@angular/core';
import { BpmnElementFactoryComponent } from '../bpmn-element-factory/bpmn-element-factory.component';

@Component({
  selector: 'app-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css']
})
export class MainEditorComponent implements OnInit {
  elements: string[] = [];
  factory: any;

  constructor(factory: BpmnElementFactoryComponent) {
    this.factory = factory;
   }

  ngOnInit() {
  }

  logSomething() {
    console.log("something")
  }

  createElementOnEditor(type){
    console.log(type)
    this.elements.push(type)
    console.log(this.elements.length)
  }

  addElement(test: String): void {
    console.log("adding Element");
    this.factory.createElement();
  }

}
