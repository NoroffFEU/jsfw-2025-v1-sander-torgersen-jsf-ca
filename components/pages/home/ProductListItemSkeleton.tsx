import { Skeleton } from "@/components/ui/skeleton";

export default function ProductListItemSkeleton() {
  return (
    <div>
      <Skeleton className="mb-6 h-7 w-40" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col overflow-hidden rounded-lg border"
          >
            <Skeleton className="aspect-square w-full rounded-none" />
            <div className="flex flex-col gap-2 p-4">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="mt-2 h-9 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
