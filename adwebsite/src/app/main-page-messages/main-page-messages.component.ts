import { MainPageHeadlines } from './../models/MainPageHeadlines';
import { Component } from '@angular/core';

import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'main-page-messages',
  templateUrl: './main-page-messages.component.html',
  styleUrls: ['./main-page-messages.component.css']
})
export class MainPageMessagesComponent {
    showNavigationArrows = false;
	showNavigationIndicators = false;
	messages = [
        new MainPageHeadlines("Our Customer Experience", "With agility in process and integrity with resolve, we provide mastery of product."),
        new MainPageHeadlines("15 Years of SAP Experience"),
        new MainPageHeadlines("Global SAP CX Experts"),
        new MainPageHeadlines("Optimized, Customized & Integrated", "SPM - CPQ - Commissions - C4C - CRM - Quote 2.0 - Quote 1.0"),
    ]

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}
