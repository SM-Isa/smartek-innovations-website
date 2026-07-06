import { redirect } from "next/navigation";

export default function PricingPage() {
  // Currently, the only product with public pricing is SchoolFee.
  // Redirecting to the SchoolFee pricing section.
  redirect("/products/schoolfee");
}
