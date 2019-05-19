import { Injectable } from '@angular/core';
import { getArrayOfModels } from '@lernato/common';
import { ApiService } from '@lernato/common-angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Hero } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  url = '/api/hero';

  constructor(private api: ApiService) {}

  create(hero: Hero): Observable<any> {
    return this.api.post(this.url, hero).pipe(
      map((result: any) => new Hero(result)),
      catchError((error: any) => error));
  }

  delete(id: string): Observable<any> {
    return this.api.delete(`${this.url}/${id}`);
  }

  get(id: string): Observable<any> {
    return this.api.get(`${this.url}/${id}`).pipe(
      map((result: any) => new Hero(result)),
      catchError((error: any) => error));
  }

  getAll(): Observable<any> {
    return this.api.get(this.url).pipe(
      map((result: any) => getArrayOfModels(Hero, result)),
      catchError((error: any) => error));
  }

  update(hero: Hero): Observable<any> {
    return this.api.put(this.url, hero).pipe(
      map((result: any) => new Hero(result)),
      catchError((error: any) => error));
  }
}
