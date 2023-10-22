export default function Autobind(_target: any, _propertyName: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  return {
    configurable: true,
    enumerable: false,
    get() {
      return descriptor.value.bind(this);
    }
  }
}