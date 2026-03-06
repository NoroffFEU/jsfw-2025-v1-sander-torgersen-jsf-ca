import { Skeleton } from "@/components/ui/skeleton";
import ProductListItemSkeleton from "./ProductListItemSkeleton";

export default function ProductListSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="mb-10 text-center">
        <Skeleton className="mx-auto h-10 w-64" />
        <Skeleton className="mx-auto mt-3 h-5 w-80" />
        <Skeleton className="mx-auto mt-6 h-10 w-full max-w-md" />
      </section>

      <ProductListItemSkeleton />
    </div>
  );
}
