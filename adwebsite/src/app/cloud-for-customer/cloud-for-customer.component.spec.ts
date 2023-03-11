import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudForCustomerComponent } from './cloud-for-customer.component';

describe('CloudForCustomerComponent', () => {
  let component: CloudForCustomerComponent;
  let fixture: ComponentFixture<CloudForCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudForCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudForCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
