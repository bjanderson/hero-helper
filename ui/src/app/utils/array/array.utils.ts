import { hasPropertyOf } from '../model';
import { getBoolean, getNumber, getString, getValueOrDefault } from '../primitives';

export function getArray(objs: any): any[] {
  objs = getValueOrDefault(objs, []);
  let array = [];

  if (objs.constructor === Array) {
    array = objs;
  } else {
    array = [objs];
  }

  return array;
}

export function getArrayOfBooleans(objs: any): boolean[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getBoolean(obj);
      array.push(obj);
    }
  }

  return array;
}

export function getArrayOfModels(clazz: any, objs: any): any[] {
  objs = getArray(objs);
  const array = [];

  for (const obj of objs) {
    if (hasPropertyOf(clazz, obj)) {
      array.push(new clazz(obj));
    }
  }

  return array;
}

export function getArrayOfNumbers(objs: any): number[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getNumber(obj);
      array.push(obj);
    }
  }

  return array;
}

export function getArrayOfStrings(objs: any): string[] {
  objs = getArray(objs);
  const array = [];

  for (let obj of objs) {
    if (obj != null) {
      obj = getString(obj);
      array.push(obj);
    }
  }

  return array;
}
