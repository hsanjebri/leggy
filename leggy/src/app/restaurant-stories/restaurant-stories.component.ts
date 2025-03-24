import { Component } from '@angular/core';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-restaurant-stories',
  standalone: true,
  imports: [
    NgForOf,CommonModule
  ],
  templateUrl: './restaurant-stories.component.html',
  styleUrl: './restaurant-stories.component.css'
})
export class RestaurantStoriesComponent {
  stories = [
    { img: '/assets/story1.png' },
    { img: '/assets/story2.png' },
    { img: '/assets/story3.png' },
    { img: '/assets/story1.png' },
    { img: '/assets/story2.png' },
  ];
  // The center index remains the same (index 2)
  getImageClass(index: number): string {
    if (index === 2) return 'middle'; // Main Card Stays Big
    if (index === 1 || index === 3) return 'side'; // Adjacent Cards
    return 'small'; // Smallest Cards
  }


  // Function to rotate images left
  scrollLeft() {
    setTimeout(() => {
      this.stories.unshift(this.stories.pop()!);
    }, 200); // Small delay before rotating
  }

  scrollRight() {
    setTimeout(() => {
      this.stories.push(this.stories.shift()!);
    }, 200); // Small delay before rotating
  }


  getImage(index: number): string {
    return this.stories[index].img;
  }}
