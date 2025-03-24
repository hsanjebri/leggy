import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit {
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>(); // ✅ Emit a string event

  words = ["Repas Idéal", "Déjeuner ", "Dîner "];
  typewriterText = "";
  i = 0;
  j = 0;
  isDeleting = false;
  speed = 100;
  delayBetweenWords = 1500;

  // ✅ Selected theme (default is orange)
  selectedTheme = 'orange-theme';

  ngOnInit() {
    this.type();
    this.startRotation();

  }

  type() {
    let currentWord = this.words[this.i];

    if (this.isDeleting) {
      this.typewriterText = currentWord.substring(0, this.j - 1);
      this.j--;

      if (this.j === 0) {
        this.isDeleting = false;
        this.i = (this.i + 1) % this.words.length;
      }
    } else {
      this.typewriterText = currentWord.substring(0, this.j + 1);
      this.j++;

      if (this.j === currentWord.length) {
        this.isDeleting = true;
        setTimeout(() => this.type(), this.delayBetweenWords);
        return;
      }
    }

    setTimeout(() => this.type(), this.isDeleting ? this.speed / 2 : this.speed);
  }

  // ✅ Categories data
  categories = [
    {
      name: 'Cuisine Internationale',
      image: '/assets/maindish-hero.png',
      textColor: 'white-text',
      bgClass: 'plate-container1',
      borderColor: 'orange-border',
      theme: 'orange-theme' // 🔥 Orange theme
    },
    {
      name: 'Cuisine Sénégalaise',
      image: '/assets/maindish-hero.png',
      textColor: 'black-text',
      bgClass: 'plate-container',
      borderColor: 'red-border',
      theme: 'red-theme' // 🔥 Red theme
    },
    {
      name: 'Cuisine Healthy',
      image: '/assets/maindish-hero.png',
      textColor: 'black-text',
      bgClass: 'plate-container',
      borderColor: 'green-border',
      theme: 'green-theme' // 🔥 Green theme
    }
  ];


  changeTheme(theme: string, selectedCategoryName: string) {
    this.selectedTheme = theme;
    this.themeChange.emit(theme); // 🔥 Emit event to parent

    // ✅ Update category classes - Only the selected one gets color
    this.categories.forEach(category => {
      if (category.name === selectedCategoryName) {
        category.bgClass = 'plate-container1'; // Set the selected category to color
      } else {
        category.bgClass = 'plate-container'; // Set others to white
      }
    });
  }

  rotationAngle = 0; // Start at 0 degrees



  startRotation() {
    setInterval(() => {
      this.rotationAngle += 40; // Rotate 40 degrees (9 times = full 360°)
      if (this.rotationAngle >= 360) {
        this.rotationAngle = 0; // Reset after full rotation
      }
    }, 3000); // Every 10 seconds
  }

}
