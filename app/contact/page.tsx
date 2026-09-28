import Breadcrumbs from "@/components/Breadcrumbs";
import ContactSection from "@/components/ContactSection";
import BookingForm from "@/components/BookingForm";
import GoogleReviews from "@/components/GoogleReviews";
import { getLogo } from "@/lib/assets";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Madhuri Electrical | AC & Electrician in Visakhapatnam",
  description:
    "Contact Madhuri Electrical, HB Colony Road, Seethammadhara, Visakhapatnam. Call or WhatsApp +91 96665 42541 for AC service, AC repair and electrical work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="container-page pt-6 [&_nav]:mb-0 [&_nav]:pb-5">
          <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} tone="dark" />
        </div>
      </div>
      <ContactSection logoSrc={getLogo()} headingAs="h1" />
      <BookingForm />
      <GoogleReviews />
    </>
  );
}
