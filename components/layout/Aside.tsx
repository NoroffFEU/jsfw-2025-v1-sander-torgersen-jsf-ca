"use client";

import { useSidebarMenu } from "@/lib/hooks/useSidebarMenu";
import { X } from "lucide-react";
import { Separator } from "../ui/separator";
import { useCartStore } from "@/lib/hooks/useCartStore";

export default function CartAside() {
  const { isOpen, close } = useSidebarMenu();
  const { items } = useCartStore();

  return (
    <>
      {isOpen && (
        <aside className="fixed right-0 top-0 z-50 hidden h-full w-80 flex-col border-l bg-background shadow-xl md:flex animate-in slide-in-from-right duration-200">
          <div className="flex h-full flex-col gap-4 p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Cart </h2>

              <button
                onClick={close}
                className=" rounded-md p-1 hover:bg-accent"
                aria-label="Close cart sidebar"
              >
                <X className="h-5 w-5 cursor-pointer" />
              </button>
            </div>

            <Separator className="my-2" />

            <div>{items.length} items in cart</div>

            <>
              <div>
                {items.map((item) => (
                  <div key={item.product.id}>
                    <div>
                      <p>{item.product.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          </div>
        </aside>
      )}
    </>
  );
}
