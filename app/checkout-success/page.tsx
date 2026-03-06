import SuccessPage from "@/components/pages/cart/checkout-succes/SuccessPage";

export default async function CheckoutSuccessPage() {
  const timer = new Promise((resolve) => setTimeout(resolve, 1500));
  await timer;

  return <SuccessPage />;
}
