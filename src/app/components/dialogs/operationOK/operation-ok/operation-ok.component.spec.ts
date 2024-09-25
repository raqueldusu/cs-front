import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationOKComponent } from './operation-ok.component';

describe('OperationOKComponent', () => {
  let component: OperationOKComponent;
  let fixture: ComponentFixture<OperationOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OperationOKComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
