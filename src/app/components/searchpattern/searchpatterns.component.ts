import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterPatternComponent } from './filterpattern/filterpattern.component';

@Component({
  selector: 'app-searchpatterns',
  templateUrl: './searchpatterns.component.html',
  styleUrls: ['./searchpatterns.component.css'],
})
export class SearchpatternsComponent implements OnInit {
  @ViewChild(FilterPatternComponent) filterPattern: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  goBack() {
    this.filterPattern.clear();
    this.router.navigateByUrl('');
  }
}
