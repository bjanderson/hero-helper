import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  options: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
    responseType: 'json',
    withCredentials: true
  };

  constructor(
    private http: HttpClient
  ) {}

  delete(url: string, options: any = this.options): Observable<any> {
    return this.http.delete(url, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  get(url: string, params?: any, options: any = this.options): Observable<any> {
    const requestOptions = Object.assign({}, options);
    const httpParams = new HttpParams();

    if (params != null) {
      for (const key of Object.keys(params)) {
        httpParams.set(key, params[key]);
      }
    }

    requestOptions.params = httpParams;

    return this.http.get(url, requestOptions).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  patch(url: string, body: any, options: any = this.options): Observable<any> {
    return this.http.patch(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  post(url: string, body: any, options: any = this.options): Observable<any> {
    return this.http.post(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  put(url: string, body: any, options: any = this.options): Observable<any> {
    return this.http.put(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  mapError(error: any): Observable<any> {
    return Observable.throw(this.mapResponse(error));
  }

  mapResponse(response: any): any {
    let res;
    try {
      res = response.json();
    } catch (e) {
      res = response;
    }
    return res;
  }
}
