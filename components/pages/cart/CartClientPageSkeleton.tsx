import { Skeleton } from "@/components/ui/skeleton";

export default function CartClientPageSkeleton() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="mb-8 h-8 w-48" />

      <div className="space-y-4">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="flex gap-4 rounded-lg border p-4">
            <Skeleton className="h-20 w-20 shrink-0 rounded-md" />
            <div className="flex flex-1 flex-col gap-2">
              <Skeleton className="h-5 w-2/3" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-9 w-28" />
            </div>
          </div>
        ))}
      </div>

      <Skeleton className="my-6 h-px w-full" />

      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-8 w-24" />
        </div>
        <Skeleton className="h-11 w-32" />
      </div>
    </div>
  );
}
