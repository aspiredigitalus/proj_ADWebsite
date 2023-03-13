import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScalePlanningComponent } from './scale-planning.component';

describe('ScalePlanningComponent', () => {
  let component: ScalePlanningComponent;
  let fixture: ComponentFixture<ScalePlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScalePlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScalePlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
