import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Nukleus engages: quality, speed, and value-based pricing.",
};

export default function ApproachPage() {
  return (
    <PagePlaceholder
      eyebrow="Approach"
      title="How we work."
      lede="Quality, speed, value-based pricing. We scope tightly, ship fast, and price against the outcomes you actually need — not the hours we spend."
    />
  );
}
