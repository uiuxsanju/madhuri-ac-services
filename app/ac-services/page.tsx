import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("ac-services");

export default function Page() {
  return <CategoryPage pageKey="ac-services" />;
}
