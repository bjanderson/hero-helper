import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

import 'rxjs/add/observable/throw';

import { RequestBuilderService } from '../request-builder';

@Injectable()
export class ApiService {

  constructor(
    private http: Http,
    private requestBuilder: RequestBuilderService
  ) {}

  delete(url: string): Observable<any> {
    const request = this.requestBuilder.buildDeleteRequest(url);
    return this.getObservable(request);
  }

  get(url: string, params?: any): Observable<any> {
    const request = this.requestBuilder.buildGetRequest(url, params);
    return this.getObservable(request);
  }

  getObservable(request: Request): Observable<any> {
    return this.http.request(request).pipe(
      map(this.mapResponse.bind(this)),
      catchError(this.mapError.bind(this))
    );
  }

  post(url: string, body: any): Observable<any> {
    const request = this.requestBuilder.buildPostRequest(url, body);
    return this.getObservable(request);
  }

  put(url: string, body: any): Observable<any> {
    const request = this.requestBuilder.buildPutRequest(url, body);
    return this.getObservable(request);
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
