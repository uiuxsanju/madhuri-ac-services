import CategoryPage, { categoryMetadata } from "@/components/CategoryPage";

export const metadata = categoryMetadata("ac-installation");

export default function Page() {
  return <CategoryPage pageKey="ac-installation" />;
}
