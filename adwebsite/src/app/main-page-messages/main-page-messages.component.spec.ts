import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMessagesComponent } from './main-page-messages.component';

describe('MainPageMessagesComponent', () => {
  let component: MainPageMessagesComponent;
  let fixture: ComponentFixture<MainPageMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
