import { Injectable } from '@angular/core';

import { Hero } from '../../models';

import { ApiService } from '../api';

@Injectable()
export class HeroService {

  url = '/api/hero';

  constructor(private api: ApiService) {}

  getAll() {
    return this.api.get(this.url);
  }

  get(id: string) {
    return this.api.get(`${this.url}/${id}`);
  }

  create(hero: Hero) {
    return this.api.post(this.url, hero);
  }

  update(hero: Hero) {
    return this.api.put(this.url, hero);
  }

  delete(id: string) {
    return this.api.delete(`${this.url}/${id}`);
  }
}
