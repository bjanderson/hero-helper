export const defaultArray = [];
export const defaultBoolean = false;
export const defaultNumber = 0;
export const defaultObject = {};
export const defaultString = '';

export function getBoolean(value: any, defaultValue: boolean = defaultBoolean): boolean {
  if (value === 'false') {
    value = false;
  }
  value = value == null ? defaultValue : !!value;
  return value;
}

export function getNumber(value: any, defaultValue: number = defaultNumber): number {
  let num = value == null ? defaultValue : Number(value).valueOf();
  if (isNaN(num)) {
    num = defaultValue;
  }
  return num;
}

export function getObject(value: any, defaultValue: object = defaultObject): object {
  value = getValueOrDefault(value, defaultValue);
  return value;
}

export function getString(value: any, defaultValue: string = defaultString): string {
  let str = value == null ? defaultValue : value.toString();
  if (str.indexOf('[object Object]') > -1) {
    str = defaultValue;
  }
  return str;
}

export function getValueOrDefault(value: any, defaultValue: any): any {
  value = value == null ? defaultValue : value;
  return value;
}

export function getValueOrNull(value: any): any {
  value = getValueOrDefault(value, null);
  return value;
}
