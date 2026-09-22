import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("electrical-repair");

export default function Page() {
  return <CategoryPage pageKey="electrical-repair" />;
}
