export class ApiError {

  errorMessage: string;

  constructor(obj?: any) {
    this.errorMessage = typeof obj === 'string' ? obj :
      obj != null && obj.errorMessage != null ? obj.errorMessage :
      obj != null && obj.message != null ? obj.message :
      'An Error Occurred';
  }
}
