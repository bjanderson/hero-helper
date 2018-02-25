import { Injectable } from '@angular/core';

import { Villain } from '../../models';

import { ApiService } from '../api';

@Injectable()
export class VillainService {

  url = '/api/villain';

  constructor(private api: ApiService) {}

  create(villain: Villain) {
    return this.api.post(this.url, villain);
  }

  delete(id: string) {
    return this.api.delete(`${this.url}/${id}`);
  }

  get(id: string) {
    return this.api.get(`${this.url}/${id}`);
  }

  getAll() {
    return this.api.get(this.url);
  }

  update(villain: Villain) {
    return this.api.put(this.url, villain);
  }
}
