import {
  useCartStore,
  type CartItem as CartItemType,
} from "@/lib/hooks/useCartStore";
import Image from "next/image";
import { Button } from "./ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { product, quantity } = item;
  const { updateItemQuantity, removeItemFromCart } = useCartStore();

  const handleRemoveItem = () => {
    removeItemFromCart(product.id);
    toast.success(`${product.title} removed from cart!`);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-lg border p-4">
      <div className="flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md bg-muted">
          <Image
            src={product.image.url}
            alt={product.image.alt || product.title}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-1 min-w-0">
          <h3 className="truncate text-sm font-semibold">{product.title}</h3>

          {product.discountedPrice < product.price ? (
            <div>
              <p className="text-m font-medium text-red-600">
                ${product.discountedPrice.toFixed(2)}
              </p>
              <p className="text-sm font-medium text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-sm font-medium text-muted-foreground">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center mx-auto sm:mx-0 sm:ml-auto">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateItemQuantity(product.id, quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus className="h-3 w-3" />
          </Button>
          <span className="w-8 text-center text-sm font-medium">
            {quantity}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateItemQuantity(product.id, quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
        <p className="w-20 text-right text-sm font-bold">
          ${(product.discountedPrice * quantity).toFixed(2)}
        </p>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-destructive hover:text-destructive"
          onClick={handleRemoveItem}
          aria-label="Remove item"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
