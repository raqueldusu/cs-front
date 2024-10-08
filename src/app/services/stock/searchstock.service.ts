import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiStockFilter } from 'src/app/interfaces/stock/iapistockfilter';
import { IStockResponse } from 'src/app/interfaces/stock/istock-response';

export let filterStock: IApiStockFilter;
@Injectable({
  providedIn: 'root',
})
export class SearchstockService {
  constructor(private httpClient: HttpClient) {}

  searchStock(
    page: number,
    size: number,
    customSort?: string,
    request?: IApiStockFilter
  ): Observable<IStockResponse> {
    let urlAPI: string = `http://localhost:8293/v1/liquidaciones/stock/list?page=${page}&size=${size}`;

    if (customSort != null && customSort != '') {
      urlAPI += `&sort=${customSort}`;
    }

    if (request != null && request != undefined) {
      if (request.idStock != null && request.idStock != '') {
        urlAPI += `&idStock=${request.idStock}`;
      }

      if (request.amount != null && request.amount != 0) {
        urlAPI += `&amount=${request.amount}`;
      }

      if (request.red != null && request.red != 256) {
        urlAPI += `&red=${request.red}`;
      }

      if (request.name != null && request.name != '') {
        urlAPI += `&name=${request.name}`;
      }

      if (request.green != null && request.green != 256) {
        urlAPI += `&green=${request.green}`;
      }

      if (request.blue != null && request.blue != 256) {
        urlAPI += `&blue=${request.blue}`;
      }

      filterStock = request;
    }

    return this.httpClient.get<IStockResponse>(urlAPI).pipe();
  }
}
