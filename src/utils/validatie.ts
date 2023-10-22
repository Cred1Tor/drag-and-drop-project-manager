export interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

export function validate(validatableInput: Validatable) {
  const { value, required, minLength, maxLength, min, max } = validatableInput;

  if (required && !value) {
    return false;
  }
  if (minLength && (typeof value !== 'string' || value.length < minLength)) {
    return false;
  }
  if (maxLength && (typeof value !== 'string' || value.length < maxLength)) {
    return false;
  }
  if (min && (typeof value !== 'number' || value < min)) {
    return false;
  }
  if (max && (typeof value !== 'number' || value > max)) {
    return false;
  }

  return true;
}