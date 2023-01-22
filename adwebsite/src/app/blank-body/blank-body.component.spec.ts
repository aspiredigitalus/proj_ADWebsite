import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankBodyComponent } from './blank-body.component';

describe('BlankBodyComponent', () => {
  let component: BlankBodyComponent;
  let fixture: ComponentFixture<BlankBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
