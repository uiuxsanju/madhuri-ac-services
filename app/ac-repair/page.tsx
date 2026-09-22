import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("ac-repair");

export default function Page() {
  return <CategoryPage pageKey="ac-repair" />;
}
