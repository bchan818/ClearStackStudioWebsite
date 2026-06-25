import { ContactCta } from "@/components/ContactCta";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Hero } from "@/components/Hero";
import { MvpServiceCta } from "@/components/MvpServiceCta";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Process />
      <FeaturedProduct />
      <MvpServiceCta />
      <ContactCta />
    </main>
  );
}
