import { ExternalLink, MessageSquarePlus, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

const Stars = ({ n }: { n: number }) => (
  <span className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < n ? "fill-amber-400 text-amber-400" : "text-line"}`} aria-hidden="true" />
    ))}
  </span>
);

/** Google reviews: real reviews from data/reviews.ts, plus links to read / write reviews on Google. No invented ratings. */
export default function GoogleReviews() {
  const reviews = GOOGLE_REVIEWS;
  return (
    <section id="reviews" className="section scroll-mt-20 bg-surface" aria-labelledby="reviews-title">
      <div className="container-page">
        <SectionHeading
          id="reviews-title"
          eyebrow="Google reviews"
          title="What Our Customers Say"
          intro="Read genuine reviews from our customers on Google, or share your own experience."
          action={
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              <GoogleG className="h-4 w-4" /> View on Google <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          }
        />

        {reviews.length > 0 ? (
          <ul className="no-scrollbar -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.name + r.text.slice(0, 20)} className="card flex w-[85%] shrink-0 snap-start flex-col p-5 md:w-auto">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-50 font-display font-extrabold text-brand-600">
                      {r.name.trim().charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="font-bold text-navy-900">{r.name}</p>
                      {r.when && <p className="text-xs text-muted">{r.when}</p>}
                    </div>
                  </div>
                  <GoogleG />
                </div>
                <Stars n={r.rating} />
                <p className="mt-3 flex-1 leading-relaxed text-muted">{r.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="card flex flex-col items-center gap-4 p-8 text-center sm:p-10">
            <GoogleG className="h-12 w-12" />
            <div>
              <p className="font-display text-xl font-extrabold text-navy-900">Customer reviews on Google</p>
              <p className="mx-auto mt-2 max-w-md text-muted">
                See what customers in Visakhapatnam say about our AC and electrical work — and if we&rsquo;ve served you, please leave a review.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 grid gap-3 sm:flex sm:justify-center">
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <GoogleG className="h-5 w-5" /> Read Google Reviews
          </a>
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-call">
            <MessageSquarePlus className="h-5 w-5" aria-hidden="true" /> Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}
