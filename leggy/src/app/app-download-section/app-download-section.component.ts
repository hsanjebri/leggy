import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-app-download-section',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './app-download-section.component.html',
  styleUrl: './app-download-section.component.css'
})
export class AppDownloadSectionComponent {
  images = [
    { src: '/assets/Promotions.png', alt: 'Delicious Fried Wonton' },
    { src: '/assets/Promotions.png', alt: 'Tasty Burger Offer' },
    { src: '/assets/Promotions.png', alt: 'Special Combo Deal' }
  ];

  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
