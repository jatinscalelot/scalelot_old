export default class AppUtils {
  public static nullPropsRemover(obj: any): any {
      if (Array.isArray(obj)) {
          return obj
              .map(v => (v && typeof v === 'object') ? AppUtils.nullPropsRemover(v) : v)
              .filter(v => !(v == null));
      } else {
          return Object.entries(obj)
              .map(([k, v]) => [k, v && typeof v === 'object' ? AppUtils.nullPropsRemover(v) : v])
              .reduce((a:any, [k, v]) => (v == null ? a : (a[k]=v, a)), {});
      }
  }
}