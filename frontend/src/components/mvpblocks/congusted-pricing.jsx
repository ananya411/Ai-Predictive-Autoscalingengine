
import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// 
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
// Define your plans
const plans = [
  {
    name: "STARTER",
    price: "50",
    yearlyPrice: "40",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start Free Trial",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "99",
    yearlyPrice: "79",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "299",
    yearlyPrice: "239",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "/contact",
    isPopular: false,
  },
];
export default function CongestedPricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef(null);
  const handleToggle = (checked) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };
  return (
    <div
      className="container relative w-full overflow-hidden bg-[#0a0613] py-20 font-light text-white antialiased"
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
        minWidth: "100%",
      }}>
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Simple, transparent pricing for all.
        </h2>
        <p className="text-white/60 text-lg whitespace-pre-line">
          Choose the plan that works for you\nAll plans include access to our
          platform, lead generation tools, and dedicated support.
        </p>
      </div>

      <div className="mb-10 flex justify-center text-white">
        <label className="relative inline-flex cursor-pointer items-center">
          <Label>
            <Switch
              ref={switchRef}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative data-[state=checked]:bg-[#9b87f5] data-[state=unchecked]:bg-white/20"
            />
          </Label>
        </label>
        <span className="ml-2 font-semibold">
          Annual billing <span className="text-[#9b87f5]">(Save 20%)</span>
        </span>
      </div>

      <div className="sm:2 grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                  y: plan.isPopular ? -20 : 0,
                  opacity: 1,
                  x: index === 2 ? -30 : index === 0 ? 30 : 0,
                  scale: index === 0 || index === 2 ? 0.94 : 1.0,
                }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `relative rounded-2xl border-[1px] p-6 text-center lg:flex lg:flex-col lg:justify-center`,
              plan.isPopular ? "border-[#9b87f5] border-2 bg-[#9b87f5]/10" : "border-white/10 bg-white/5",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg] transform"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left",
            )}>
            {plan.isPopular && (
              <div className="bg-[#9b87f5] absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl px-2 py-0.5">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold">
                  Popular
                </span>
              </div>
            )}
            <div className="flex flex-1 flex-col">
              <p className="text-white/60 text-base font-semibold">
                {plan.name}
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-white text-5xl font-bold tracking-tight">
                  <NumberFlow
                    value={
                      isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)
                    }
                    format={{
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }}
                    transformTiming={{
                      duration: 500,
                      easing: "ease-out",
                    }}
                    willChange
                    className="font-variant-numeric: tabular-nums"
                  />
                </span>
                {plan.period !== "Next 3 months" && (
                  <span className="text-white/60 text-sm leading-6 font-semibold tracking-wide">
                    / {plan.period}
                  </span>
                )}
              </div>

              <p className="text-white/60 text-xs leading-5">
                {isMonthly ? "billed monthly" : "billed annually"}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="text-[#9b87f5] mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-left text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4 w-full border-white/10" />

              <a
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "hover:bg-[#9b87f5] hover:text-white hover:ring-[#9b87f5] transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-[#9b87f5] text-white hover:bg-[#8b77e5]"
                    : "bg-white/5 text-white hover:bg-white/10 border-white/10",
                )}>
                {plan.buttonText}
              </a>
              <p className="text-white/60 mt-6 text-xs leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}