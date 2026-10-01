import { redirect } from "next/navigation";

export default function PricingPage() {
  // Currently, the product with public pricing is SmartBridgeEdu.
  // Redirecting to the SmartBridgeEdu pricing section.
  redirect("/products/smartbridgeedu");
}
