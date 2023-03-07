import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoMasterComponent } from './who-master.component';

describe('WhoMasterComponent', () => {
  let component: WhoMasterComponent;
  let fixture: ComponentFixture<WhoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
