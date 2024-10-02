import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLoteComponent } from './filterpattern.component';

describe('FilterComponent', () => {
  let component: FilterLoteComponent;
  let fixture: ComponentFixture<FilterLoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterLoteComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterLoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
