import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilterStockComponent } from './filterstock/filterstock.component';

@Component({
  selector: 'app-searchstock',
  templateUrl: './searchstock.component.html',
  styleUrls: ['./searchstock.component.css'],
})
export class SearchStockComponent implements OnInit {
  @ViewChild(FilterStockComponent) filterStock: any;

  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  goBack() {
    this.filterStock.clear();
    this.router.navigateByUrl('');
  }
}
