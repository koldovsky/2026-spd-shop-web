export interface CatalogItem { sku: string; name: string }
export interface Price { sku: string; currency: string; baseCents: number }

const pricingUrl = () => process.env.PRICING_URL ?? "http://localhost:8082";

export async function fetchCatalog(): Promise<CatalogItem[]> {
  const res = await fetch(`${pricingUrl()}/catalog`, { cache: "no-store" });
  if (!res.ok) throw new Error(`pricing /catalog: ${res.status}`);
  return res.json();
}

export async function fetchPrice(sku: string, currency: string): Promise<Price> {
  const res = await fetch(`${pricingUrl()}/prices/${encodeURIComponent(sku)}?currency=${currency}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`pricing /prices/${sku}: ${res.status}`);
  return res.json();
}
