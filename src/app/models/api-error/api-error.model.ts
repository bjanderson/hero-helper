import { getNumber, getObject, getString } from '@practicalwebdev/utils';

export class ApiError {

  errorMessage: string;
  status: number;

  constructor(obj?: any) {
    obj = getObject(obj);
    this.errorMessage = getString(obj.errorMessage, 'An Error Occurred');
    this.status = getNumber(obj.status);
  }
}
