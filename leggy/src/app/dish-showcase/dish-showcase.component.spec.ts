import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishShowcaseComponent } from './dish-showcase.component';

describe('DishShowcaseComponent', () => {
  let component: DishShowcaseComponent;
  let fixture: ComponentFixture<DishShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishShowcaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
