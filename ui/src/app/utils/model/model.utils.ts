
export function hasPropertyOf(clazz: any, obj: any): boolean {
  if (clazz == null || obj == null) { return false; }
  const model = new clazz();
  const modelKeys = Object.keys(model);

  for (const key of modelKeys) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}

export function isInstanceOf(clazz: any, obj: any): boolean {
  if (clazz == null || obj == null) { return false; }
  const model = new clazz();
  const modelKeys = Object.keys(model);

  for (const key of modelKeys) {
    if (!obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}
