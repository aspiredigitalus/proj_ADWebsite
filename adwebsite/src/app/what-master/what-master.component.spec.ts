import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatMasterComponent } from './what-master.component';

describe('WhatMasterComponent', () => {
  let component: WhatMasterComponent;
  let fixture: ComponentFixture<WhatMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
