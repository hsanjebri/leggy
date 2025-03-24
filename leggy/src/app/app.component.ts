import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {NgClass, NgIf, NgOptimizedImage} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {HeroSectionComponent} from './hero-section/hero-section.component';
import {FeatureHighlightsComponent} from './feature-highlights/feature-highlights.component';
import {DishShowcaseComponent} from './dish-showcase/dish-showcase.component';
import {PizzaCarouselComponentComponent} from './pizza-carousel-component/pizza-carousel-component.component';
import {PromotionsSectionComponent} from './promotions-section/promotions-section.component';
import {RestaurantStoriesComponent} from './restaurant-stories/restaurant-stories.component';
import {AppDownloadSectionComponent} from './app-download-section/app-download-section.component';
import {FooterComponent} from './footer/footer.component';
import {BackgroundAnimationsComponent} from './background-animations/background-animations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignUpComponent, SignInComponent, NgOptimizedImage, HttpClientModule, RouterOutlet, HeaderComponent, HeroSectionComponent, FeatureHighlightsComponent, DishShowcaseComponent, PizzaCarouselComponentComponent, PromotionsSectionComponent, RestaurantStoriesComponent, NgClass, AppDownloadSectionComponent, FooterComponent, BackgroundAnimationsComponent, NgIf, BackgroundAnimationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leggy'; selectedTheme = 'orange-theme';

  changeTheme(theme: string) {
    this.selectedTheme = theme;
    console.log('Theme updated:', this.selectedTheme); // ✅ Check if it updates
  }

}
