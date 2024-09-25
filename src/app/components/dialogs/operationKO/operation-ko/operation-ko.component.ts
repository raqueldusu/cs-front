import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-operation-ko',
  templateUrl: './operation-ko.component.html',
  styleUrls: ['./operation-ko.component.css'],
})
export class OperationKOComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
