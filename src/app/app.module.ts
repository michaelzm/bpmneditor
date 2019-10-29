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
import { BpmnDirectiveDirective } from './bpmn-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainEditorComponent,
    BpmnElementComponent,
    TopbarComponent,
    BpmnElementFactoryComponent,
    BpmnDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [
    BpmnElementFactoryComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
