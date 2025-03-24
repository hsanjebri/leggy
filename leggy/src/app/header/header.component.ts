import {Component, Input, SimpleChanges} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() selectedTheme: string = 'orange-theme'; // ✅ Receives the theme dynamically

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedTheme']) {
      console.log('Theme changed:', this.selectedTheme); // ✅ Debugging Output
    }
  }
}
