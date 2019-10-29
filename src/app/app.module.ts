import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainEditorComponent } from './main-editor/main-editor.component';
import { BpmnElementComponent } from './bpmn-element/bpmn-element.component';
import { TopbarComponent } from './topbar/topbar.component';
import { BpmnElementFactoryComponent } from './bpmn-element-factory/bpmn-element-factory.component';
import { ModelingSurfaceComponent } from './modeling-surface/modeling-surface.component';
import { ElementDirective } from './main-editor/element-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainEditorComponent,
    BpmnElementComponent,
    TopbarComponent,
    BpmnElementFactoryComponent,
    ModelingSurfaceComponent,
    ElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  entryComponents: [BpmnElementComponent],
  providers: [
    ModelingSurfaceComponent,
    BpmnElementFactoryComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
