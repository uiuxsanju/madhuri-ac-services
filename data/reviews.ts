// Google reviews shown on the site.
// OWNER: copy REAL reviews from your Google Business Profile here (name, stars, text, when).
// Only add genuine reviews exactly as posted on Google — never write or edit reviews yourself.
// While this list is empty, the section shows "See our reviews on Google" + "Write a review" buttons.

export type Review = { name: string; rating: 1 | 2 | 3 | 4 | 5; text: string; when?: string };

export const GOOGLE_REVIEWS: Review[] = [];
