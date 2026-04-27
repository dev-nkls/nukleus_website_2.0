import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nukleus.",
};

export default function ContactPage() {
  return (
    <PagePlaceholder
      eyebrow="Contact"
      title="Get in touch."
      lede="Tell us what you're trying to build, and we'll tell you whether we're the right fit."
    />
  );
}
