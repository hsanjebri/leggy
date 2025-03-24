import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantStoriesComponent } from './restaurant-stories.component';

describe('RestaurantStoriesComponent', () => {
  let component: RestaurantStoriesComponent;
  let fixture: ComponentFixture<RestaurantStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurantStoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
