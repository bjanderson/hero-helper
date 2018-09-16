import { Injectable } from '@angular/core';
import { getArrayOfModels, ApiService } from '@practicalwebdev/utils';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Villain } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  url = '/api/villain';

  constructor(private api: ApiService) {}

  create(villain: Villain): Observable<any> {
    return this.api.post(this.url, villain).pipe(
      map((result: any) => new Villain(result)),
      catchError((error: any) => error));
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`${this.url}/${id}`);
  }

  get(id: string): Observable<any> {
    return this.api.get(`${this.url}/${id}`).pipe(
      map((result: any) => new Villain(result)),
      catchError((error: any) => error));
  }

  getAll(): Observable<any> {
    return this.api.get(this.url).pipe(
      map((result: any) => getArrayOfModels(Villain, result)),
      catchError((error: any) => error));
  }

  update(villain: Villain): Observable<any> {
    return this.api.put(this.url, villain).pipe(
      map((result: any) => new Villain(result)),
      catchError((error: any) => error));
  }
}
