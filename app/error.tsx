"use client";

import { RefreshCw } from "lucide-react";
import CallButton from "@/components/CallButton";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="section">
      <div className="container-page flex max-w-2xl flex-col items-center text-center">
        <h1 className="section-title">Something went wrong</h1>
        <p className="mt-3 text-muted">Please try again. You can also reach us directly by phone or WhatsApp.</p>
        <div className="mt-8 grid w-full gap-3 sm:flex sm:w-auto sm:justify-center">
          <button type="button" onClick={reset} className="btn btn-outline"><RefreshCw className="h-5 w-5" aria-hidden="true" /> Try Again</button>
          <CallButton />
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
