import { fetchCatalog, fetchPrice } from "@/lib/services";

/** BFF: catalog + prices for the product grid. */
export async function GET(request: Request) {
  const currency = new URL(request.url).searchParams.get("currency") ?? "EUR";
  try {
    const catalog = await fetchCatalog();
    const items = await Promise.all(catalog.map(async (p) => ({ ...p, price: await fetchPrice(p.sku, currency) })));
    return Response.json(items);
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 502 });
  }
}
