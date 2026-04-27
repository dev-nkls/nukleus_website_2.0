import type { Metadata } from "next";
import { PagePlaceholder } from "@/components/page-placeholder";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom AI systems engineered around your specific business problems.",
};

export default function ServicesPage() {
  return (
    <PagePlaceholder
      eyebrow="Services"
      title="What we build."
      lede="Custom AI systems engineered around your specific business problems — from production-grade agents to task automation to model-backed internal tools."
    />
  );
}
