import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iselection } from 'src/app/interfaces/common/iselection';
import { IpatternRequest } from 'src/app/interfaces/patterns/ipattern-request';
import { filterPattern } from 'src/app/services/patterns/get-patterns.service';
import { TablepatternComponent } from '../tablepattern/tablepattern.component';
import { CommonsService } from 'src/app/services/commons.service';
export let filtro: boolean = false;

@Component({
  selector: 'app-filterpattern',
  templateUrl: './filterpattern.component.html',
  styleUrls: ['./filterpattern.component.css'],
})
export class FilterPatternComponent implements OnInit {
  form: FormGroup;

  showFilter: boolean = false;
  errorFecha: boolean = false;

  collectionList: Iselection[] = [
    { id: '99', desc: 'Todos', selected: true },
  ];

  ctList: Iselection[] = [
    { id: '11', desc: '11', selected: false },
    { id: '14', desc: '14', selected: false },
    { id: '99', desc: 'Todos', selected: true },
  ];

  sizeList: Iselection[] = [
    { id: '1', desc: 'Pequeño', selected: false },
    { id: '2', desc: 'Mediano', selected: false },
    { id: '3', desc: 'Grande', selected: false },
    { id: '99', desc: 'Todos', selected: true },
  ];

  seleccionadoSize: any = '0';
  seleccionadoCt: any = 0;
  seleccionadoCollection: any = 0;

  @ViewChild(TablepatternComponent) tablePattern: any;

  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonsService,
  ) {
    this.form = this.formBuilder.group({
      selectedSize: new FormData(),
      colours: '',
      sellectedCollection: new FormData(),
      selectedCt: new FormData(),
      fileName: '',
    });
  }

  ngOnInit(): void {

    this.commonService.changePattern.subscribe((show: boolean) => {
      this.showFilter = !show;
    });

    setTimeout(() => {
      this.compruebaFiltro();
    }, 800);
  }

  compruebaFiltro() {
    let filtro = filterPattern;

    if (filtro != null && filtro != undefined) {
      if (filtro.size != null && filtro.size != '' && filtro.size != '99') {
        this.selectedSize?.setValue(filtro.size);
        this.seleccionadoSize = filtro.size;
      }

      if (filtro.colours != null) {
        this.coloursSelected?.setValue(filtro.colours);
      }

      if (filtro.collection != null && filtro.collection != '') {
        this.collectionSelected?.setValue(filtro.collection);
        this.seleccionadoCollection = filtro.collection;
      }

      if (filtro.filename != null && filtro.filename != '') {
        this.fileSelected?.setValue(filtro.filename);
      }
    }
  }

  getPatterns(event: any): void {
    let size: string = '';
    let fileName: string = '';
    let colours: any;
    let collection: string = '';
    let ct: any;

    if (this.selectedSize != null && typeof this.selectedSize.value === 'string') {
      size = this.selectedSize.value;
      this.seleccionadoSize = size;
    }

    if (this.fileSelected != null && typeof this.fileSelected.value === 'string') {
      fileName = this.fileSelected.value;
    }

    if (this.coloursSelected != null && typeof this.coloursSelected.value === 'string') {
      colours = this.coloursSelected.value;
    }

    if (this.collectionSelected != null && typeof this.collectionSelected.value === 'string') {
      collection = this.collectionSelected.value;
    }

    if (!this.errorFecha) {
      const request: IpatternRequest= {
        size: size,
        filename: fileName,
        colours: colours,
        collection: collection,
      };

      filtro = true;

      this.tablePattern.getPaymentSet('', false, request);
    }
  }

  clear(): void {
    this.form.reset();
    this.seleccionadoSize = '0';
    this.seleccionadoCt = 0;
    this.errorFecha = false;
    filtro = false;
    this.tablePattern.getPaymentSet('', false);
  }

  get selectedSize() {
    return this.form.get('selectedSize');
  }

  get coloursSelected() {
    return this.form.get('colours');
  }

  get collectionSelected() {
    return this.form.get('collection');
  }

  get fileSelected() {
    return this.form.get('fileName');
  }

  get ctSelected() {
    return this.form.get('selectedCt');
  }
}
