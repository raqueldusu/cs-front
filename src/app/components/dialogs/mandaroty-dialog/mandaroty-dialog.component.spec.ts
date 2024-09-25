import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MandarotyDialogComponent } from './mandaroty-dialog.component';

describe('MandarotyDialogComponent', () => {
  let component: MandarotyDialogComponent;
  let fixture: ComponentFixture<MandarotyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MandarotyDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MandarotyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
