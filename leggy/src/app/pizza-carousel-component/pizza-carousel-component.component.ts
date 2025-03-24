import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-pizza-carousel-component',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pizza-carousel-component.component.html',
  styleUrl: './pizza-carousel-component.component.css'
})
export class PizzaCarouselComponentComponent {
  pizzas = [
    { name: 'Pepperoni Pizza', image: '/assets/pizza1.png' },
    { name: 'Veggie Delight', image: '/assets/pizza2.png' },
    { name: 'BBQ Chicken', image: '/assets/pizza3.png' },
    { name: 'Margherita', image: '/assets/pizza4.png' },
    { name: 'Cheese Lovers', image: '/assets/pizza5.png' }
  ];

  currentIndex = 0;

  nextPizza() {
    this.currentIndex = (this.currentIndex + 1) % this.pizzas.length;
  }

  prevPizza() {
    this.currentIndex = (this.currentIndex - 1 + this.pizzas.length) % this.pizzas.length;
  }

  get currentPizza() {
    return this.pizzas[this.currentIndex];
  }

  getLeftSidePizzas() {
    return [
      this.pizzas[(this.currentIndex - 2 + this.pizzas.length) % this.pizzas.length],
      this.pizzas[(this.currentIndex - 1 + this.pizzas.length) % this.pizzas.length]
    ];
  }

  getRightSidePizzas() {
    return [
      this.pizzas[(this.currentIndex + 1) % this.pizzas.length],
      this.pizzas[(this.currentIndex + 2) % this.pizzas.length]
    ];
  }
}
