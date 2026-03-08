"use client";

import { Products } from "@/lib/types/types";
import ProductListItem from "./ProductListItem";
import SearchBar from "../../SearchBar";
import { useCallback, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ProductListProps {
  products: Products[];
}

export default function ProductList({ products }: ProductListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const query = searchParams.get("query") || "";

  const handleQuery = useCallback(
    (newQuery: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (newQuery.trim()) {
        params.set("query", newQuery);
      } else {
        params.delete("query");
      }
      router.replace(`${pathName}?${params.toString()}`);
    },
    [router, pathName, searchParams],
  );

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter((product) =>
      product.title.toLowerCase().includes(lowerQuery),
    );
  }, [query, products]);

  return (
    <>
      <section className="pb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Welcome to the Online Shop!
        </h1>

        <p className="pt-2 text-muted-foreground">
          Explore our wide range of products and enjoy shopping with us.
        </p>
        <div className="pt-6">
          <SearchBar query={query} onChange={handleQuery} />
        </div>
      </section>

      <section>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="py-12 text-center text-muted-foreground">
            No products found for &quot;{query}&quot;. Try a different search.
          </p>
        )}
      </section>
    </>
  );
}
