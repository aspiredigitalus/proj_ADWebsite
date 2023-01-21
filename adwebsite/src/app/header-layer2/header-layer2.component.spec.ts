import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayer2Component } from './header-layer2.component';

describe('HeaderLayer2Component', () => {
  let component: HeaderLayer2Component;
  let fixture: ComponentFixture<HeaderLayer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLayer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLayer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
