import { NextResponse, type NextRequest } from "next/server";
import { bookingLink } from "@/lib/whatsapp";

/**
 * GET /book?name=..&phone=..&service=..&location=..&date=..&message=..
 * Fallback for the booking form: builds the WhatsApp booking message on the server and redirects to wa.me.
 * Works even when JavaScript hasn't loaded, so "Book Service" always reaches WhatsApp.
 */
export function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const get = (k: string) => (q.get(k) ?? "").slice(0, 500);
  const url = bookingLink({
    name: get("name"),
    phone: get("phone"),
    service: get("service"),
    location: get("location"),
    date: get("date"),
    message: get("message"),
  });
  return NextResponse.redirect(url, 302);
}
