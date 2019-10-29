import { Injectable } from '@angular/core';
import { ModelingSurfaceComponent } from './modeling-surface/modeling-surface.component';
import { MainEditorComponent } from './main-editor/main-editor.component';
import { BpmnElementsService } from './bpmn-element/bpmn-elements.service';

@Injectable({
  providedIn: 'root'
})
export class EditorInterfaceService {

  constructor(private modelingSurface: ModelingSurfaceComponent) { }

  OnInit() {

  }
  addElementToEditor() {

  }
}
