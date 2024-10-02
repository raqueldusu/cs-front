import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepatternComponent } from './tablepattern.component';

describe('TablepatternComponent', () => {
  let component: TablepatternComponent;
  let fixture: ComponentFixture<TablepatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablepatternComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
