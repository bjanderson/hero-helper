import { ModelUtils } from '../model';

export class ArrayUtils {
  static getArray(objs) {
    objs = objs != null ? objs : [];
    let array = [];

    if (objs.constructor === Array) {
      array = objs;
    } else {
      array = [objs];
    }

    return array;
  }

  static getArrayOfModels(clazz, objs) {
    objs = ArrayUtils.getArray(objs);
    const array = [];

    for (const obj of objs) {
      if (ModelUtils.hasPropertyOf(clazz, obj)) {
        array.push(new clazz(obj));
      }
    }

    return array;
  }
}
