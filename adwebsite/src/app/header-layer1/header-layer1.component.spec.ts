import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLayer1Component } from './header-layer1.component';

describe('HeaderLayer1Component', () => {
  let component: HeaderLayer1Component;
  let fixture: ComponentFixture<HeaderLayer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLayer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLayer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
