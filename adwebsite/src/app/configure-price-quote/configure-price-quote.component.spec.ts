import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePriceQuoteComponent } from './configure-price-quote.component';

describe('ConfigurePriceQuoteComponent', () => {
  let component: ConfigurePriceQuoteComponent;
  let fixture: ComponentFixture<ConfigurePriceQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurePriceQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigurePriceQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
