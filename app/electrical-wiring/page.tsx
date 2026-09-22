import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("electrical-wiring");

export default function Page() {
  return <CategoryPage pageKey="electrical-wiring" />;
}
