import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UaeTeamComponent } from './uae-team.component';

describe('UaeTeamComponent', () => {
  let component: UaeTeamComponent;
  let fixture: ComponentFixture<UaeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UaeTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UaeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
