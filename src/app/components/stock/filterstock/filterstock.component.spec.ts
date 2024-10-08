import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStockComponent } from './filterstock.component';

describe('FilterStockComponent', () => {
  let component: FilterStockComponent;
  let fixture: ComponentFixture<FilterStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterStockComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
