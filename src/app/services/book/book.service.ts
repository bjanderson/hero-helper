import { Injectable } from '@angular/core';

import { ApiService } from '../api';

@Injectable()
export class BookService {

  url = '/api/books';

  constructor(private api: ApiService) {}

  get() {
    return this.api.get(this.url);
  }
}
