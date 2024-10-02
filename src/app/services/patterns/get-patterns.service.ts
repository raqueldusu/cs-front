import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IpatternRequest } from 'src/app/interfaces/patterns/ipattern-request';
import { IpatternResponse } from 'src/app/interfaces/patterns/ipattern-response';
import { iapicommonrequest } from 'src/app/interfaces/load/iapicommonrequest';

export let filterPattern: IpatternRequest;
@Injectable({
  providedIn: 'root',
})
export class GetPatternsService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  getPattern(
    page: number,
    size: number,
    customSort?: string,
    request?: IpatternRequest,
  ): Observable<IpatternResponse> {
    let httpOptions = {
      headers: new HttpHeaders({
        
      }),
    };
    let result: IpatternResponse;
    var urlAPI: string = `http://localhost:8293/v1/cross-stitch/patterns/list?page=${page}&size=${size}`;

    if (customSort != null && customSort != '') {
      urlAPI += `&sort=${customSort}`;
    }
    if (request != null && request != undefined) {
      if (request.size != null && request.size != '99' && request.size != '') {
        urlAPI += `&size=${request.size}`;
      }

      if (request.filename != null && request.filename != '') {
        urlAPI += `&fileName=${request.filename}`;
      }

      if (request.colours != null) {
        urlAPI += `&colours=${request.colours}`;
      }

      if (request.collection != null && request.collection != '') {
        urlAPI += `&collection=${request.collection}`;
      }

      filterPattern = request;
    }

    return this.httpClient.get<IpatternResponse>(urlAPI, httpOptions).pipe();
  }

  getReacumulated(request: iapicommonrequest): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ',
      }),
    };

    var urlAPI: string = `http://localhost:8293/v1/pagosocio/payments/revalidate`;

    return this.httpClient.post<any>(urlAPI, JSON.stringify(request), httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
