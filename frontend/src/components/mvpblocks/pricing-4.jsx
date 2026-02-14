import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
// import { Check } from "lucide-react";
const plan = {
  name: "Suite Enterprise",
  price: 300,
  description: "For your company of any size",
  features: [
    "First premium advantage",
    "Second advantage weekly",
    "Third advantage donate to project",
    "Fourth, access to all components weekly",
  ],
  includes:
    "Security, Unlimited Storage, Payment, Search engine, and all features",
  companies: [
    {
      name: "Nvidia",
      logo: "https://placehold.co/100x40?text=Logo",
      height: 20,
    },
    {
      name: "Column",
      logo: "https://placehold.co/100x40?text=Logo",
      height: 16,
    },
    {
      name: "GitHub",
      logo: "https://placehold.co/100x40?text=Logo",
      height: 16,
    },
    {
      name: "Nike",
      logo: "https://placehold.co/100x40?text=Logo",
      height: 20,
    },
  ],
};
export default function PricingFour() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[#0a0613] py-16 font-light text-white antialiased md:py-32"
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
      }}>
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-[#9b87f5]/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
        <div className="bg-[#9b87f5]/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        <div className="bg-[#9b87f5]/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-balance md:text-4xl lg:text-5xl">
            Transform the way you manage your company
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            Empower your team with the tools they need to succeed. Flexible,
            scalable, and built for the modern enterprise.
          </p>
        </div>
        <div className="mt-10 md:mt-20">
          <div className="bg-white/5 relative rounded-3xl border border-white/10 shadow-xl backdrop-blur-sm">
            <div className="grid items-center gap-12 divide-y divide-white/10 p-12 md:grid-cols-2 md:gap-x-2 md:divide-x-0 md:divide-y-0">
              {/* Left Side */}
              <div className="pb-12 text-center md:pr-12 md:pb-0">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="mt-2 text-lg text-white/60">{plan.description}</p>
                <span className="text-[#9b87f5] mt-12 mb-6 inline-block text-6xl font-extrabold">
                  <span className="align-super text-4xl">$</span>
                  {plan.price}
                </span>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="shadow-md bg-[#9b87f5] hover:bg-[#8b77e5] text-white">
                    <a href="#">
                      Get started
                    </a>
                  </Button>
                </div>
                <p className="text-white/60 mt-12 text-sm">
                  Includes: {plan.includes}
                </p>
              </div>

              {/* Right Side */}
              <div className="relative m-3">
                <div className="text-left">
                  <h4 className="mb-4 text-lg font-medium">What’s included:</h4>
                  <ul role="list" className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-white/80">
                        <Check className="text-[#9b87f5] mt-1 size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-white/60 mt-6 text-sm">
                  Team size is flexible; add or switch members as needed.
                  Companies using our platform include:
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-start gap-6">
                  {plan.companies.map((company, i) => (
                    <img
                      key={i}
                      className="h-5 w-auto brightness-0 invert opacity-60"
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      height={company.height}
                      width="auto"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}