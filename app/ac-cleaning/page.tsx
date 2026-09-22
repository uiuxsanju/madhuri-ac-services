import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("ac-cleaning");

export default function Page() {
  return <CategoryPage pageKey="ac-cleaning" />;
}
