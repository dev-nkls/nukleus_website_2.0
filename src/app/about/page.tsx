import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "About",
  description: "About Nukleus — the team and the work.",
};

export default function AboutPage() {
  return (
    <PagePlaceholder
      eyebrow="About"
      title="About Nukleus."
      lede="A small, senior team designing tailor-made AI systems for businesses."
    />
  );
}
