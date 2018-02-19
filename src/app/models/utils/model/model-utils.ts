export class ModelUtils {

  static getString(value: any, defaultValue: string = '') {
    let str = value != null ? value.toString() : defaultValue;
    if (str.indexOf('[object Object]') > -1) {
      str = '';
    }
    return str;
  }

  static hasPropertyOf(clazz, obj) {
    if (clazz == null || obj == null) { return false }
    const model = new clazz();
    const modelKeys = Object.keys(model);

    for (const key of modelKeys) {
      if(obj.hasOwnProperty(key)) {
        return true;
      }
    }

    return false;
  }

  static isInstanceOf(clazz, obj) {
    if (clazz == null || obj == null) { return false }
    const model = new clazz();
    const modelKeys = Object.keys(model);

    for (const key of modelKeys) {
      if(!obj.hasOwnProperty(key)) {
        return false;
      }
    }

    return true;
  }
}
