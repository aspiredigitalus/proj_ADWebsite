import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersMasterComponent } from './careers-master.component';

describe('CareersMasterComponent', () => {
  let component: CareersMasterComponent;
  let fixture: ComponentFixture<CareersMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareersMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
