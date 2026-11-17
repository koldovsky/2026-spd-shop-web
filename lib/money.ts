/** Formats integer cents for display. The UI never computes prices. */
export function formatCents(cents: number, currency: string, locale = "en-IE"): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(cents / 100);
}
