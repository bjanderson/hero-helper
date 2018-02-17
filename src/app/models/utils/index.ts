import { ArrayUtils } from './array/array-utils';
import { DateUtils } from './date/date-utils';
import { ModelUtils } from './model/model-utils';

export class Utils {
  static get array() { return ArrayUtils }
  static get date() { return DateUtils }
  static get model() { return ModelUtils }
}
