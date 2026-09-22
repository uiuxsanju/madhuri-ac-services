import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("electrical-services");

export default function Page() {
  return <CategoryPage pageKey="electrical-services" />;
}
