import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCenteredDesignComponent } from './cloud-centered-design.component';

describe('CloudCenteredDesignComponent', () => {
  let component: CloudCenteredDesignComponent;
  let fixture: ComponentFixture<CloudCenteredDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudCenteredDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCenteredDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
