import { Spinner } from "@/components/ui/spinner";

export default function ContactPageSkeleton() {
  return (
    <div className="mx-auto max-w-lg px-4 py-8 sm:px-6 lg:px-8">
      <Spinner className="mx-auto h-12 w-12 text-primary" />;
    </div>
  );
}
