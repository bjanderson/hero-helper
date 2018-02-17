import { ApiError } from '../api-error';
import { Book } from '../book';
import { Utils } from '../utils';

export class BookStoreState {

  books: Book[];
  error: ApiError;

  constructor(obj?: any) {
    obj = obj != null ? obj : {};
    this.books = Utils.array.getArrayOfModels(Book, obj.books);
    this.error = obj.error != null ? new ApiError(obj.error) : null;
  }
}
