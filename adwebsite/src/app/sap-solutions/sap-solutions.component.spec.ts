import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapSolutionsComponent } from './sap-solutions.component';

describe('SapSolutionsComponent', () => {
  let component: SapSolutionsComponent;
  let fixture: ComponentFixture<SapSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
