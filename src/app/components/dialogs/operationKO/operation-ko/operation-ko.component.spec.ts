import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationKOComponent } from './operation-ko.component';

describe('OperationKOComponent', () => {
  let component: OperationKOComponent;
  let fixture: ComponentFixture<OperationKOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationKOComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationKOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
