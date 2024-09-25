import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossStitchToolbarComponent } from './cross-stitch-toolbar.component';

describe('CrossStitchToolbarComponent', () => {
  let component: CrossStitchToolbarComponent;
  let fixture: ComponentFixture<CrossStitchToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrossStitchToolbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossStitchToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
