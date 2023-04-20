export function formatPrice(num) {
  //using regular expression
  return num?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
