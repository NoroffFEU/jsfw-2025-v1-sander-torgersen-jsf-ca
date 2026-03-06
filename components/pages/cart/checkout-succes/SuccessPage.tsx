"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 text-center sm:px-6 lg:px-8">
      <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
      <h1 className="pt-6 text-3xl font-bold">Order Confirmed!</h1>
      <p className="pt-3 text-muted-foreground">
        Thank you for your purchase. Your order has been successfully placed.
      </p>
      <p className="pt-1 text-sm text-muted-foreground">
        A confirmation email will be sent to you shortly.
      </p>
      <Button asChild className="mt-8" size="lg">
        <Link href="/">Continue Shopping</Link>
      </Button>
    </div>
  );
}
