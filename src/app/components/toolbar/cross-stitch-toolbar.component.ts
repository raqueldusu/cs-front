import { Component, OnInit } from '@angular/core';
import { CommonsService } from 'src/app/services/commons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cross-stitch-toolbar',
  templateUrl: './cross-stitch-toolbar.component.html',
  styleUrls: ['./cross-stitch-toolbar.component.css'],
})
export class CrossStitchToolbarComponent implements OnInit {
  usuario: any;
  constructor(
    private commonService: CommonsService,
    private router: Router,
  ) {}

  ngOnInit(): void { }

  showFilter() {
    let url = window.location;
    if (url.href.indexOf('carga-nuevo') > 0) {
      this.commonService.changeShowFilterPattern();
    }
  }
}
