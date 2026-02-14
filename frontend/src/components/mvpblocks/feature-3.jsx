import { Cpu, Zap, LineChart, Shield, Clock, DollarSign } from "lucide-react";
import { cn } from "../../lib/utils";
// Create feature data arrays for left and right columns
const leftFeatures = [
  {
    icon: LineChart,
    title: "Predictive Scaling",
    description:
      "Forecast demand using historical data to scale resources before traffic spikes hits.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description:
      "Real-time metrics analysis ensures immediate reaction to unexpected load changes.",
    position: "left",
    cornerStyle: "sm:-translate-x-4 sm:rounded-br-[2px]",
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Only pay for what you use. Automatically scale down during low-traffic periods.",
    position: "left",
    cornerStyle: "sm:translate-x-4 sm:rounded-tr-[2px]",
  },
];
const rightFeatures = [
  {
    icon: Shield,
    title: "Security & Reliability",
    description:
      "Enterprise-grade security ensuring your data and infrastructure remain protected.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Cpu,
    title: "Resource Efficiency",
    description:
      "Maximize hardware utilization by dynamically allocating resources where needed.",
    position: "right",
    cornerStyle: "sm:translate-x-4 sm:rounded-bl-[2px]",
  },
  {
    icon: Clock,
    title: "Zero Downtime",
    description:
      "Seamless scaling operations that keep your application available 24/7.",
    position: "right",
    cornerStyle: "sm:-translate-x-4 sm:rounded-tl-[2px]",
  },
];
// Feature card component
const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;
  return (
    <div>
      <div
        className={cn(
          "relative rounded-2xl px-4 pt-4 pb-4 text-sm",
          "bg-white/5 ring-white/10 ring",
          feature.cornerStyle,
        )}>
        <div className="text-[#9b87f5] mb-3 text-[2rem]">
          <Icon />
        </div>
        <h2 className="text-white mb-2.5 text-2xl">{feature.title}</h2>
        <p className="text-white/60 text-base text-pretty">
          {feature.description}
        </p>
        {/* Decorative elements */}
        <span className="from-[#9b87f5]/0 via-[#9b87f5] to-[#9b87f5]/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
        <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,rgba(155,135,245,0.15)_0%,transparent_100%)] opacity-60"></span>
      </div>
    </div>
  );
};
export default function Feature3() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#0a0613] pt-20 pb-8 font-light text-white antialiased"
      style={{
        background: "linear-gradient(135deg, #0a0613 0%, #150d27 100%)",
      }}
      id="features">
      <div className="mx-6 max-w-[1120px] pt-2 pb-16 max-[300px]:mx-4 min-[1150px]:mx-auto">
        <div className="flex flex-col-reverse gap-6 md:grid md:grid-cols-3">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {leftFeatures.map((feature, index) => (
              <FeatureCard key={`left-feature-${index}`} feature={feature} />
            ))}
          </div>

          {/* Center column */}
          <div className="order-[1] mb-6 self-center sm:order-[0] md:mb-0">
            <div className="bg-white/5 text-white ring-white/10 relative mx-auto mb-4.5 w-fit rounded-full rounded-bl-[2px] px-4 py-2 text-sm ring">
              <span className="relative z-1 flex items-center gap-2">
                Core Features
              </span>
              <span className="from-[#9b87f5]/0 via-[#9b87f5] to-[#9b87f5]/0 absolute -bottom-px left-1/2 h-px w-2/5 -translate-x-1/2 bg-gradient-to-r"></span>
              <span className="absolute inset-0 bg-[radial-gradient(30%_40%_at_50%_100%,rgba(155,135,245,0.25)_0%,transparent_100%)]"></span>
            </div>
            <h2 className="text-white mb-2 text-center text-2xl sm:mb-2.5 md:text-[2rem]">
              Why Choose Our Engine?
            </h2>
            <p className="text-white/60 mx-auto max-w-[18rem] text-center text-pretty">
              Our AI-driven autoscaling engine analyzes real-time system metrics and predicts future load using advanced machine learning algorithms.
            </p>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {rightFeatures.map((feature, index) => (
              <FeatureCard key={`right-feature-${index}`} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}