import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaTeamComponent } from './usa-team.component';

describe('UsaTeamComponent', () => {
  let component: UsaTeamComponent;
  let fixture: ComponentFixture<UsaTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaTeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
