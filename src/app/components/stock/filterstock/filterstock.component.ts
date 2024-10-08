import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iselection } from 'src/app/interfaces/common/iselection';
import { IApiStockFilter } from 'src/app/interfaces/stock/iapistockfilter';
import { TableStockComponent } from '../tablestock/tablestock.component';
import { CommonsService } from 'src/app/services/commons.service';
export let filtro: boolean = false;

@Component({
  selector: 'app-filterstock',
  templateUrl: './filterstock.component.html',
  styleUrls: ['./filterstock.component.css'],
})
export class FilterStockComponent implements OnInit {
  form: FormGroup;

  showFilter: boolean = false;
  seleccionadoColour: any = 0;

  colourList: Iselection[] = [
    { id: '', desc: 'Todos', selected: true },
    { id: 'ORD', desc: 'Blanco', selected: false },
    { id: 'BCK', desc: 'Gris', selected: false },
    { id: 'LOC', desc: 'Negro', selected: false },
    { id: 'RES', desc: 'Marron', selected: false },
    { id: 'RES', desc: 'Rosa', selected: false },
    { id: 'RES', desc: 'Rojo', selected: false },
    { id: 'RES', desc: 'Azul', selected: false },
    { id: 'RES', desc: 'Verde', selected: false },
    { id: 'RES', desc: 'Amarillo', selected: false },
    { id: 'RES', desc: 'Naranja', selected: false },
    { id: 'RES', desc: 'Marado', selected: false },
  ];

  typeList: Iselection[] = [
    { id: '', desc: 'Todos', selected: true },
    { id: 'ORD', desc: 'Básicos', selected: false },
    { id: 'BCK', desc: 'Combinados', selected: false },
    { id: 'LOC', desc: 'Metálicos', selected: false },
    { id: 'RES', desc: 'Satén', selected: false },
  ];

  @ViewChild(TableStockComponent) tableStock: any;


  constructor(
    private formBuilder: FormBuilder,
    private commonService: CommonsService,
  ) {
    this.form = this.formBuilder.group({
      amount: 0,
      stockId: '',
      colours: '',
      red: 256,
      green: 256,
      blue: 256,
      name: '',
    });
  }

  ngOnInit(): void {

    this.commonService.changePattern.subscribe((show: boolean) => {
      this.showFilter = !show;
    });
  }

  getStock(form: FormGroup): void {  
    const request: IApiStockFilter= {
      amount: form.value.amount,
      name: form.value.name,
      idStock: form.value.stockId,
      blue: form.value.blue,
      green: form.value.green,
      red: form.value.red,
      colour: form.value.colour,
    };
    filtro = true;

    this.tableStock.getStock('', false, request);
  }

  clear(): void {
    this.form.reset();
    const request: IApiStockFilter= {
      amount: 0,
      name: '',
      idStock: '',
      blue: 256,
      green: 256,
      red: 256,
      colour: '',
    };
    filtro = false;
    this.tableStock.getStock('', false);
  }
}
