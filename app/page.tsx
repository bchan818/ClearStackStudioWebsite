import { ContactCta } from "@/components/ContactCta";
import { FeaturedProduct } from "@/components/FeaturedProduct";
import { Hero } from "@/components/Hero";
import { MvpServiceCta } from "@/components/MvpServiceCta";
import { Process } from "@/components/Process";
import { ServicePackages } from "@/components/ServicePackages";
import { Services } from "@/components/Services";
import { StorefrontCta } from "@/components/StorefrontCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <ServicePackages variant="preview" />
      <StorefrontCta
        eyebrow="Storefront MVP proof"
        title="Review the ClearBloom Beauty storefront MVP before starting your own."
        text="ClearBloom Beauty is a fictional, inquiry-based storefront proof that shows how ClearStack Studio can package premium catalog pages, product detail pages, policy pages, and a future ecommerce upgrade path for beauty, wellness, fashion, lifestyle, food/product, boutique ecommerce, and creator merchandise brands."
        variant="amber"
        proofHref="/work/clearbloom-beauty/case-study"
        proofLabel="See ClearBloom case study"
      />
      <Process />
      <FeaturedProduct />
      <MvpServiceCta />
      <ContactCta />
    </main>
  );
}
