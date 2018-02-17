import { Injectable } from '@angular/core';
import {
  Headers,
  Request,
  RequestMethod,
  RequestOptions,
  ResponseContentType,
  URLSearchParams
} from '@angular/http';

@Injectable()
export class RequestBuilderService {

  constructor() {}

  buildGetRequest(url: string, params?: Object): Request {
    let options = this.buildRequestOptions(RequestMethod.Get, url);

    if (params != null) {
      for (let key of Object.keys(params)) {
        options.search.append(key, params[key]);
      }
    }

    return new Request(options);
  }

  buildDeleteRequest(url: string): Request {
    let options = this.buildRequestOptions(RequestMethod.Delete, url);
    return new Request(options);
  }

  buildPostRequest(url: string, body: any): Request {
    let options = this.buildRequestOptions(RequestMethod.Post, url, body);
    return new Request(options);
  }

  buildPutRequest(url: string, body: any): Request {
    let options = this.buildRequestOptions(RequestMethod.Put, url, body);
    return new Request(options);
  }

  buildRequestOptions(method: RequestMethod, url: string, body?: any): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });

    let options = new RequestOptions();
    options.headers = headers;
    options.method = method;
    options.responseType = ResponseContentType.Json;

    options.search = new URLSearchParams();
    options.url = url;
    options.withCredentials = true;

    if (body != null) {
      options.body = body;
    }

    return options;
  }
}
