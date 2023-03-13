import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalServicesComponent } from './digital-services.component';

describe('DigitalServicesComponent', () => {
  let component: DigitalServicesComponent;
  let fixture: ComponentFixture<DigitalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
