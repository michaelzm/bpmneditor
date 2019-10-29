import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingSurfaceComponent } from './modeling-surface.component';

describe('ModelingSurfaceComponent', () => {
  let component: ModelingSurfaceComponent;
  let fixture: ComponentFixture<ModelingSurfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelingSurfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelingSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
