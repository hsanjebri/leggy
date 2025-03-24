import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCarouselComponentComponent } from './pizza-carousel-component.component';

describe('PizzaCarouselComponentComponent', () => {
  let component: PizzaCarouselComponentComponent;
  let fixture: ComponentFixture<PizzaCarouselComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaCarouselComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCarouselComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
