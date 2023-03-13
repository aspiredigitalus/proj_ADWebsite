import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPerformanceManagementComponent } from './sales-performance-management.component';

describe('SalesPerformanceManagementComponent', () => {
  let component: SalesPerformanceManagementComponent;
  let fixture: ComponentFixture<SalesPerformanceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesPerformanceManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPerformanceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
