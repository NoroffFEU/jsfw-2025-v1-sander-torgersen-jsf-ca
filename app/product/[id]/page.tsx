import ProductDetailsClient from "@/components/pages/home/details-page/ProductDetailsClient";
import { fetchProductById } from "@/lib/services/api";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  let product;

  try {
    product = await fetchProductById(id);
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Failed to load product.</div>;
  }

  return (
    <>
      <ProductDetailsClient product={product} />
    </>
  );
}
