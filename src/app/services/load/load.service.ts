import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iselection } from 'src/app/interfaces/common/iselection';
import { iapicommonrequest } from 'src/app/interfaces/load/iapicommonrequest';
import { IPreviewResponse } from 'src/app/interfaces/load/ipreviewresponse';
import { ISendImageRequest } from 'src/app/interfaces/load/isendimagerequest';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json',
  };

  constructor(private httpClient: HttpClient) {}

  procesarImagen(request: ISendImageRequest): Observable<IPreviewResponse> {
    let urlApi: string = `http://localhost:8293/v1/crossstitch/load/processImage`;
    return this.httpClient.post<IPreviewResponse>(urlApi, JSON.stringify(request), this.httpOptions).pipe();
  }

  descargarPatron(request: ISendImageRequest): Observable<string> {
    let urlApi: string = `http://localhost:8293/v1/crossstitch/load/savePattern`;

    return this.httpClient.post<string>(urlApi, JSON.stringify(request), this.httpOptions).pipe();
  }

  searchCollections(): Observable<Iselection[]> {
    let urlAPI: string = `http://localhost:8293/v1/liquidaciones/collections/list`;
    return this.httpClient.get<Iselection[]>(urlAPI).pipe();
  }

}
