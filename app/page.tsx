import { ContactCta } from "@/components/ContactCta";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Hero } from "@/components/Hero";
import { MvpServiceCta } from "@/components/MvpServiceCta";
import { Process } from "@/components/Process";
import { ServicePackages } from "@/components/ServicePackages";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ServicePackages variant="preview" />
      <Process />
      <FeaturedProduct />
      <MvpServiceCta />
      <ContactCta />
    </main>
  );
}
