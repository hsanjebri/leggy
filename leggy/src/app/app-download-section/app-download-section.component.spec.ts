import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDownloadSectionComponent } from './app-download-section.component';

describe('AppDownloadSectionComponent', () => {
  let component: AppDownloadSectionComponent;
  let fixture: ComponentFixture<AppDownloadSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDownloadSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDownloadSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
