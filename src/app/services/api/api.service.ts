import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

import { RequestBuilderService } from '../request-builder';

@Injectable()
export class ApiService {

  options: any = {
    headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
    responseType: 'json',
    withCredentials: true
  };

  constructor(
    private http: HttpClient,
    private requestBuilder: RequestBuilderService
  ) {}

  delete(url: string, options: any = this.options): Observable<any> {
    /* const request = this.requestBuilder.buildDeleteRequest(url);
    return this.getObservable(request); */
    return this.http.delete(url, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  get(url: string, params?: any, options: any = this.options): Observable<any> {
    /* const request = this.requestBuilder.buildGetRequest(url, params);
    return this.getObservable(request); */
    const httpParams = new HttpParams();

    if (params != null) {
      for (const key of Object.keys(params)) {
        httpParams.set(key, params[key]);
      }
    }

    options.params = httpParams;

    return this.http.post(url, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }
/*
  getObservable(request: HttpRequest<any>): Observable<any> {
    return this.http.request(request).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this))
    );
  }
 */

  patch(url: string, body: any, options: any = this.options): Observable<any> {
    /* const request = this.requestBuilder.buildPostRequest(url, body);
    return this.getObservable(request); */
    options.body = body;
    return this.http.patch(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  post(url: string, body: any, options: any = this.options): Observable<any> {
    /* const request = this.requestBuilder.buildPostRequest(url, body);
    return this.getObservable(request); */
    options.body = body;
    return this.http.post(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  put(url: string, body: any, options: any = this.options): Observable<any> {
    /* const request = this.requestBuilder.buildPutRequest(url, body);
    return this.getObservable(request); */
    options.body = body;
    return this.http.put(url, body, options).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this)));
  }

  private mapError(error: any): Observable<any> {
    return Observable.throw(this.mapResponse(error));
  }

  private mapResponse(response: any): any {
    let res;
    try {
      res = response.json();
    } catch (e) {
      res = response;
    }
    return res;
  }
}
