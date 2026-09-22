import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("ac-maintenance");

export default function Page() {
  return <CategoryPage pageKey="ac-maintenance" />;
}
