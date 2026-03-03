import ProductList from "@/components/ProductList";
import { fetchProducts } from "@/lib/services/api";
import { Products } from "@/lib/types/types";

export default async function Home() {
  let products: Products[] = [];
  try {
    products = await fetchProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ProductList products={products} />
      </div>
    </main>
  );
}
