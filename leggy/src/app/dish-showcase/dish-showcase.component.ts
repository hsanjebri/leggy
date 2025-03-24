import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dish-showcase',
  standalone: true,
  imports: [CommonModule], // ✅ Added CommonModule to enable *ngFor
  templateUrl: './dish-showcase.component.html',
  styleUrls: ['./dish-showcase.component.css']
})
export class DishShowcaseComponent {
  @Input() selectedTheme: string = 'orange-theme';  // Default Theme

  restaurants = [
    {
      name: ' Restaurant Blacklist',
      image: 'assets/restaurant1.png'  // ✅ Ensure assets are in src/assets/
    },
    {
      name: 'Restaurant\n' +
        'Pulao',
      image: 'assets/restaurant2.png'
    },
    {
      name: 'Restaurant\n' +
        'Pulao',
      image: 'assets/restaurant3.png'
    },{
      name: 'Restaurant\n' +
        'Pulao',
      image: 'assets/restaurant4.png'
    }
  ];

}
