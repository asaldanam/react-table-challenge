/** Generates time based base64 uuid  */
export function uuid() {
  return btoa(new Date().toISOString());
}
