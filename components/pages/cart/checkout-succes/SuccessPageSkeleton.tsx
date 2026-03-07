import { Spinner } from "@/components/ui/spinner";

export default function SuccessPageSkeleton() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6 lg:px-8">
      <Spinner className="mx-auto h-12 w-12 text-primary" />
      <p className="pt-4 text-lg text-muted-foreground">
        Processing your order…
      </p>
    </div>
  );
}
