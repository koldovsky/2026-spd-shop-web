import { fetchCatalog, fetchPrice } from "@/lib/services";
import { formatCents } from "@/lib/money";

export const dynamic = "force-dynamic";

export default async function Home() {
  let items: { sku: string; name: string; baseCents: number }[] = [];
  let error = "";
  try {
    const catalog = await fetchCatalog();
    items = await Promise.all(catalog.map(async (p) => ({ ...p, baseCents: (await fetchPrice(p.sku, "EUR")).baseCents })));
  } catch (e) {
    error = (e as Error).message;
  }
  return (
    <main>
      <h1>Shop</h1>
      {error && <p style={{ color: "crimson" }}>shop-pricing is not reachable ({error}). Start it on :8082.</p>}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
        {items.map((p) => (
          <article key={p.sku} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
            <h3 style={{ margin: "0 0 8px" }}>{p.name}</h3>
            <p style={{ margin: 0, fontSize: 20 }}>{formatCents(p.baseCents, "EUR")}</p>
            <small>{p.sku}</small>
          </article>
        ))}
      </div>
    </main>
  );
}
