import { Skeleton } from "@/components/ui/skeleton";

export default function ContactPageSkeleton() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="mb-2 h-8 w-40" />

      <Skeleton className="mb-8 h-5 w-72" />

      <div className="grid gap-4">
        <div>
          <Skeleton className="mb-1 h-4 w-20" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div>
          <Skeleton className="mb-1 h-4 w-14" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div>
          <Skeleton className="mb-1 h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div>
          <Skeleton className="mb-1 h-4 w-18" />
          <Skeleton className="h-24 w-full" />
        </div>

        <Skeleton className="h-11 w-full rounded-md" />
      </div>
    </div>
  );
}
