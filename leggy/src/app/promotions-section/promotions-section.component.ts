import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-promotions-section',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './promotions-section.component.html',
  styleUrl: './promotions-section.component.css'
})
export class PromotionsSectionComponent {
  promoImages = [
    { src: '/assets/promo-left.png', alt: 'Pizza Promo', class: 'left-promo' },
    { src: '/assets/combo-offer1.png', alt: 'Combo Offer 65%', class: 'top-right' },
    { src: '/assets/combo-offer2.png', alt: 'Combo Offer 75%', class: 'bottom-right' }
  ];
}
