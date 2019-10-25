import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnElementComponent } from './bpmn-element.component';

describe('BpmnElementComponent', () => {
  let component: BpmnElementComponent;
  let fixture: ComponentFixture<BpmnElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpmnElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpmnElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
