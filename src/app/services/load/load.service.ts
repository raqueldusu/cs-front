import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iapicommonrequest } from 'src/app/interfaces/load/iapicommonrequest';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' ,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  cargaImagen(bodyDataFlow: iapicommonrequest): Observable<void> {
    let urlApi: string = `http://localhost:8293/v1/crossstitch/load/loadImage`;
    return this.httpClient.get<void>(urlApi, this.httpOptions).pipe();
  }

  procesarImagen(bodyDataFlow: iapicommonrequest): Observable<String> {
    let urlApi: string = `http://localhost:8293/v1/crossstitch/load/processImage`;
    return this.httpClient.post<String>(urlApi, JSON.stringify(bodyDataFlow), this.httpOptions).pipe();
  }

  descargarPatron(bodyDataFlow: iapicommonrequest): Observable<void> {
    let urlApi: string = `http://localhost:8293/v1/crossstitch/load/savePattern`;
    return this.httpClient.get<void>(urlApi, this.httpOptions).pipe();
  }

}
