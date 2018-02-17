import { GlobalVariablesService } from './global-variables.service';

describe('GlobalVariablesService', function () {
  let service;

  beforeEach(function () {
    service = new GlobalVariablesService();
  });

  it('should have APP_METADATA defined', function () {
    expect(service.APP_METADATA).toBeDefined();
  });

  it('should have HOSTNAME defined', function () {
    expect(service.HOSTNAME).toBeDefined();
  });
});
