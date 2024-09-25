import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadNewComponent } from './loadnew.component';

describe('LoadNewComponent', () => {
  let component: LoadNewComponent;
  let fixture: ComponentFixture<LoadNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadNewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
