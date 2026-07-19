import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-page flex flex-1 flex-col items-start justify-center py-24">
        <p className="text-label-caps text-on-surface-variant mb-6">
          Error 404
        </p>
        <h1 className="text-hero text-on-surface mb-6 uppercase">
          Page not <em className="italic font-normal">found.</em>
        </h1>
        <p className="text-body-lg text-on-surface-variant max-content mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="text-label-caps inline-flex min-h-11 items-center justify-center rounded bg-primary px-6 py-3 text-on-primary transition-colors hover:bg-primary-container"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
