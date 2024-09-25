import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonsService {
  showFilterPattern: boolean = true;

  @Output() changePattern: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  changeShowFilterPattern() {
    this.showFilterPattern = !this.showFilterPattern;
    this.changePattern.emit(this.showFilterPattern);
  }
}
