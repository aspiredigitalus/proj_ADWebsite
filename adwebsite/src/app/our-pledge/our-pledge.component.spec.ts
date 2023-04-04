import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPledgeComponent } from './our-pledge.component';

describe('OurPledgeComponent', () => {
  let component: OurPledgeComponent;
  let fixture: ComponentFixture<OurPledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
