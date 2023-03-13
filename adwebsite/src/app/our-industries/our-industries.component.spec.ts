import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurIndustriesComponent } from './our-industries.component';

describe('OurIndustriesComponent', () => {
  let component: OurIndustriesComponent;
  let fixture: ComponentFixture<OurIndustriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurIndustriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurIndustriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
