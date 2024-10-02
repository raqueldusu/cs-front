import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpatternsComponent } from './searchpatterns.component';

describe('SearchpatternsComponent', () => {
  let component: SearchpatternsComponent;
  let fixture: ComponentFixture<SearchpatternsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchpatternsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
