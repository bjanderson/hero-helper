
export function hasExpectedFields(expected: any, actual: any): boolean {
  const expectedFields = Object.keys(expected);
  const actualFields = Object.keys(actual);
  for (const i in expectedFields) {
    if (actualFields[i] !== expectedFields[i]) {
      return false;
    }
  }
  return actualFields.length === expectedFields.length;
}

export function hasExpectedValues(expected: any, actual: any): boolean {
  const expectedValues = Object.values(expected);
  const actualValues = Object.values(actual);
  for (const i in expectedValues) {
    if (actualValues[i] !== expectedValues[i]) {
      return false;
    }
  }
  return actualValues.length === expectedValues.length;
}

export function hasExpectedFieldsAndValues(expected: any, actual: any): boolean {
  return hasExpectedFields(expected, actual) && hasExpectedValues(expected, actual);
}
