import { RequestMethod } from '@angular/http';

import { RequestBuilderService } from './request-builder.service';

describe('RequestBuilderService', function () {
  let service;

  describe('constructor()', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('constructs', function () {
      expect(service).toBeDefined();
    });
  });

  describe('buildGetRequest(url: string, params?: Object): Request', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('has a function named buildGetRequest', function () {
      expect(typeof service.buildGetRequest).toEqual('function');
    });

    it('calls buildRequestOptions with the correct method and url', function () {
      spyOn(service, 'buildRequestOptions').and.returnValue({url: 'test.url'});
      service.buildGetRequest('test.url');
      expect(service.buildRequestOptions).toHaveBeenCalledWith(RequestMethod.Get, 'test.url');
    });

    it('creates the request using the GET method', function () {
      let test = service.buildGetRequest('test.url');
      expect(test.method).toEqual(RequestMethod.Get);
    });

    it('creates the request with the given url and the given parameter', function () {
      let test = service.buildGetRequest('test.url', {test: 'test-params'});
      expect(test.url).toEqual('test.url?test=test-params');
    });

    it('creates the request with the given url and the given parameters', function () {
      let test = service.buildGetRequest('test.url', {test1: 'test-params-1', test2: 'test-params-2', test3: 'test-params-3'});
      expect(test.url).toEqual('test.url?test1=test-params-1&test2=test-params-2&test3=test-params-3');
    });

    it('creates a jsonp request with the given url', function () {
      let test = service.buildGetRequest('test.url', {callback: 'JSONP_CALLBACK'});
      expect(test.url).toEqual('test.url?callback=JSONP_CALLBACK');
    });
  });

  describe('buildRequestOptions(method: RequestMethod, url: string, body?: any): RequestOptions', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('has a function named buildRequestOptions', function () {
      expect(typeof service.buildRequestOptions).toEqual('function');
    });

    it('creates the request using the POST method', function () {
      let test = service.buildRequestOptions(RequestMethod.Post, 'test.url');
      expect(test.method).toEqual(RequestMethod.Post);
    });

    it('creates the request with the given url', function () {
      let test = service.buildRequestOptions(RequestMethod.Post, 'test.url');
      expect(test.url).toEqual('test.url');
    });

    it('creates the request with the given body', function () {
      let test = service.buildRequestOptions(RequestMethod.Post, 'test.url', {test: 'testing'});
      expect(test.body).toEqual({test: 'testing'});
    });
  });

  describe('buildDeleteRequest(url: string): Request', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('has a function named buildDeleteRequest', function () {
      expect(typeof service.buildDeleteRequest).toEqual('function');
    });

    it('creates the request using the POST method', function () {
      let test = service.buildDeleteRequest('test.url');
      expect(test.method).toEqual(RequestMethod.Delete);
    });

    it('creates the request with the given url', function () {
      let test = service.buildDeleteRequest('test.url');
      expect(test.url).toEqual('test.url');
    });
  });

  describe('buildPostRequest(url: string): Request', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('has a function named buildPostRequest', function () {
      expect(typeof service.buildPostRequest).toEqual('function');
    });

    it('creates the request using the POST method', function () {
      let test = service.buildPostRequest('test.url');
      expect(test.method).toEqual(RequestMethod.Post);
    });

    it('creates the request with the given url', function () {
      let test = service.buildPostRequest('test.url');
      expect(test.url).toEqual('test.url');
    });

    it('creates the request with the given body', function () {
      let test = service.buildPostRequest('test.url', {test: 'testing'});
      expect(test._body).toEqual({test: 'testing'});
    });
  });

  describe('buildPutRequest(url: string): Request', function () {
    beforeEach(function () {
      service = new RequestBuilderService();
    });

    it('has a function named buildPutRequest', function () {
      expect(typeof service.buildPutRequest).toEqual('function');
    });

    it('creates the request using the POST method', function () {
      let test = service.buildPutRequest('test.url');
      expect(test.method).toEqual(RequestMethod.Put);
    });

    it('creates the request with the given url', function () {
      let test = service.buildPutRequest('test.url');
      expect(test.url).toEqual('test.url');
    });

    it('creates the request with the given body', function () {
      let test = service.buildPutRequest('test.url', {test: 'testing'});
      expect(test._body).toEqual({test: 'testing'});
    });
  });
});
