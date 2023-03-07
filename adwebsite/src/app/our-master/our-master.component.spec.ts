import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurMasterComponent } from './our-master.component';

describe('OurMasterComponent', () => {
  let component: OurMasterComponent;
  let fixture: ComponentFixture<OurMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
