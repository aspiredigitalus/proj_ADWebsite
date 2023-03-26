import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaTeamComponent } from './india-team.component';

describe('IndiaTeamComponent', () => {
  let component: IndiaTeamComponent;
  let fixture: ComponentFixture<IndiaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiaTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndiaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
