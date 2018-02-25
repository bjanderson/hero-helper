import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpParams,
  HttpRequest
} from '@angular/common/http';

@Injectable()
export class RequestBuilderService {

  constructor() {}

  /* buildGetRequest(url: string, params?: Object): HttpRequest {
    const options = this.buildHttpRequest('GET', url);

    if (params != null) {
      for (const key of Object.keys(params)) {
        options.search.append(key, params[key]);
      }
    }

    return new HttpRequest(options);
  }

  buildDeleteRequest(url: string): HttpRequest {
    const options = this.buildHttpRequest('DELETE', url);
    return new HttpRequest(options);
  }

  buildPostRequest(url: string, body: any): HttpRequest {
    const options = this.buildHttpRequest('POST', url, body);
    return new HttpRequest(options);
  }

  buildPutRequest(url: string, body: any): HttpRequest {
    const options = this.buildHttpRequest('PUT', url, body);
    return new HttpRequest(options);
  }

  buildHttpRequest(method: 'DELETE'|'GET'|'HEAD'|'JSONP'|'OPTIONS'|'POST'|'PUT', url: string, body?: any): any {
    const request = new HttpRequest(method, url);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');

    const options: any = {};
    options.headers = headers;
    options.method = method;
    options.responseType = 'json';

    options.params = new HttpParams();
    options.url = url;
    options.withCredentials = true;

    if (body != null) {
      options.body = body;
    }

    return options;
  } */
}
