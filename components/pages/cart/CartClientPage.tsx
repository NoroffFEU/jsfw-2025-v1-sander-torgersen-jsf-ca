"use client";

import CartItem from "@/components/pages/cart/CartItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/hooks/useCartStore";
import Link from "next/link";

export default function CartClientPage() {
  const { items, clearItemFromCart, getTotalPrice } = useCartStore();

  const handleCheckout = () => {
    clearItemFromCart();
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8 text-center">
        <h1 className="flex pt-4 text-2xl font-bold justify-center">
          Your cart is empty
        </h1>

        <p className="pt-2 text-muted-foreground">
          Please add some products to your cart before proceeding to checkout.
          <br />
          Browse our products and find something you like!
        </p>

        <div className="flex justify-center pt-6">
          <Button asChild>
            <Link href="/">Continue shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-2xl font-bold">Shopping Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
        <Separator className="my-6" />
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-2xl font-bold">${getTotalPrice().toFixed(2)}</p>
          </div>

          <Button
            asChild
            className="cursor-pointer p-5 font-bold"
            onClick={handleCheckout}
          >
            <Link href="/checkout-success">Checkout</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
