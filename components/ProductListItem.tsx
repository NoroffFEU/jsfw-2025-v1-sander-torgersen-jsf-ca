"use client";

import { Products } from "@/lib/types/types";
import Link from "next/link";

interface ProductListItemProps {
  product: Products;
}

export default function ProductListItem({ product }: ProductListItemProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="block border rounded-lg p-4 hover:shadow-lg transition-shadow"
    >
      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
