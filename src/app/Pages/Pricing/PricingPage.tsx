

import FAQ from "@/app/components/FAQ";
import PricingCards from "@/app/components/PricingCard";

export default function PricingPage() {
  return (
    <>
      {/* <Header /> */}
      <main className="bg-gray-50">
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold">Simple Pricing</h1>
          <p className="text-gray-600 mt-2">Home → Pricing</p>
        </section>
        <PricingCards/>
        
        <FAQ/>
      </main>
      
    </>
  );
}
