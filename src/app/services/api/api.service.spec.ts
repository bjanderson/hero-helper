import { BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { empty } from 'rxjs/observable/empty'

import { ApiService } from './api.service';
import { RequestBuilderService } from '../request-builder';

describe('ApiService', function () {
  let http;
  let mockBackend;
  let requestBuilder;
  let requestOptions;
  let service;

  describe('constructor()', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestBuilder = <RequestBuilderService>{};
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      service = new ApiService(http, requestBuilder);
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('delete(url: string, body: any): void', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      requestBuilder.buildDeleteRequest = function () { return 'test.url'; };
      service = new ApiService(http, requestBuilder);
    });

    it('should call requestBuilder.buildDeleteRequest with the correct url and body', function () {
      requestBuilder.buildDeleteRequest = function () {};

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({body: {test: 'test response'}})));
      });

      spyOn(requestBuilder, 'buildDeleteRequest').and.returnValue('test.url');
      service.delete('test.url');
      expect(requestBuilder.buildDeleteRequest).toHaveBeenCalledWith('test.url');
    });
  });

  describe('get(url: string, params?: any): void', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      requestBuilder.buildGetRequest = function () { return 'test.url'; };
      service = new ApiService(http, requestBuilder);
    });

    it('should call requestBuilder.buildGetRequest with the correct url', function () {
      spyOn(requestBuilder, 'buildGetRequest').and.callThrough();
      service.get('test.url');
      expect(requestBuilder.buildGetRequest).toHaveBeenCalledWith('test.url', undefined);
    });
  });

  describe('getObservable<TResponse>(request: Request): Observable<TResponse>', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = <Http>{};
      http.request = () => empty();
      requestBuilder = <RequestBuilderService>{};
      service = new ApiService(http, requestBuilder);
    });

    it('should have a function named getObservable', function () {
      expect(typeof service.getObservable).toEqual('function');
    });

    it('should call http.request', function () {
      spyOn(http, 'request').and.returnValue(empty());
      service.getObservable({url: 'test.url'});
      expect(http.request).toHaveBeenCalledWith({url: 'test.url'});
    });
  });

  describe('post(url: string, body: any): void', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      requestBuilder.buildPostRequest = function () { return 'test.url'; };
      service = new ApiService(http, requestBuilder);
    });

    it('should call requestBuilder.buildPostRequest with the correct url and body', function () {
      requestBuilder.buildPostRequest = function () {};

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({body: {test: 'test response'}})));
      });

      spyOn(requestBuilder, 'buildPostRequest').and.returnValue('test.url');
      service.post('test.url', {test: 'testing'});
      expect(requestBuilder.buildPostRequest).toHaveBeenCalledWith('test.url', {test: 'testing'});
    });
  });

  describe('put(url: string, body: any): void', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      requestBuilder.buildPutRequest = function () { return 'test.url'; };
      service = new ApiService(http, requestBuilder);
    });

    it('should call requestBuilder.buildPutRequest with the correct url and body', function () {
      requestBuilder.buildPutRequest = function () {};

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(new Response(new ResponseOptions({body: {test: 'test response'}})));
      });

      spyOn(requestBuilder, 'buildPutRequest').and.returnValue('test.url');
      service.put('test.url', {test: 'testing'});
      expect(requestBuilder.buildPutRequest).toHaveBeenCalledWith('test.url', {test: 'testing'});
    });
  });

  describe('mapError<TResponse>(error: any): Observable<TResponse>', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      service = new ApiService(http, requestBuilder);
      service.mapResponse = function () {};
    });

    it('calls the mapResponse function', function () {
      spyOn(service, 'mapResponse');
      service.mapError();
      expect(service.mapResponse).toHaveBeenCalled();
    });
  });

  describe('mapResponse(response: any): any', function () {
    beforeEach(function () {
      mockBackend = new MockBackend();
      requestOptions = new BaseRequestOptions();
      http = new Http(mockBackend, requestOptions);
      requestBuilder = <RequestBuilderService>{};
      service = new ApiService(http, requestBuilder);
    });

    it('returns response.json() if possible', function () {
      let response = {a: 'a', json: function () { return 'test response'; }};
      let test = service.mapResponse(response);
      expect(test).toEqual('test response');
    });

    it('returns the given response if response.json() fails', function () {
      let response = {a: 'a', b: 'test response'};
      let test = service.mapResponse(response);
      expect(test).toEqual(response);
    });
  });
});
