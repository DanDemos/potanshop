export default function trueTypeOf(element:any) {
  return Object.prototype.toString.call(element).slice(8, -1).toLowerCase();
}
