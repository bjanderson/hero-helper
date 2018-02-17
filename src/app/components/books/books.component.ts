import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { takeUntil } from 'rxjs/operators';

import { Book } from '../../models';
import { BookStoreService } from '../../store';

@Component({
  selector: 'books',
  styles: [require('./books.component.scss')],
  template: require('./books.component.html'),
})
export class BooksComponent implements OnDestroy, OnInit {

  books: Book[] = [];
  unsubscribe$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private bookStoreService: BookStoreService) {
    this.bookStoreService.dispatchLoadAction();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  ngOnInit() {
    this.bookStoreService.getBooks().pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(this.setBooks.bind(this));
  }

  setBooks(books: Book[]) {
    this.books = books;
  }
}
