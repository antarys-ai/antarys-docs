import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, PartyPopper } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type Platform = {
  name: string;
  icon?: React.ReactNode;
  description: string;
  priceNote: string;
  cta: {
    variant: "glow" | "default";
    label: string;
    href: string;
  };
  features: string[];
  featured: boolean;
  classes?: string;
};

const platforms: Platform[] = [
  {
    name: "Windows",
    description: "Universal Windows binary for amdx64 platforms",
    priceNote: "Free for offline forever.",
    cta: {
      variant: "default",
      label: "Coming soon",
      href: "#",
    },
    features: [
      "Antarys Database",
      "Vertically Scaled by default",
      "Supports every feature",
      "Best for your hobby LLM project",
    ],
    featured: false,
    classes:
      "glass-2 from-card/100 to-card/100 dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-blue-200/30 after:blur-[72px]",
  },
  {
    name: "Apple Intel",
    description: "Apple binaries for Intel and ARM mac for everybody",
    priceNote: "Free for offline forever.",
    cta: {
      variant: "default",
      label: "Coming soon",
      href: "#",
    },
    features: [
      "Antarys Database",
      "Vertically Scaled by default",
      "Supports every feature",
      "Best for your hobby LLM project",
    ],
    featured: false,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-blue-500/50 after:blur-[72px]",
  },
  {
    name: "Apple ARM",
    description: "Apple binaries for Intel and ARM mac for everybody",
    priceNote: "Free for offline forever.",
    cta: {
      variant: "glow",
      label: "Download for free",
      href: "https://github.com/antarys-ai/antarys-releases/releases/download/v0.1.0/antarys-apple-arm.zip",
    },
    features: [
      "Antarys Database",
      "Vertically Scaled by default",
      "Supports every feature",
      "Best for your hobby LLM project",
    ],
    featured: false,
    classes:
      "glass-3 from-card/100 to-card/100 dark:glass-4 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-blue-500/50 after:blur-[72px]",
  },
  {
    name: "Linux x64",
    description: "Universal Linux binary for amdx64 machines",
    priceNote: "Free for offline forever.",
    cta: {
      variant: "glow",
      label: "Download for free",
      href: "https://github.com/antarys-ai/antarys-releases/releases/download/v0.1.0/antarys-linux-x64.zip",
    },
    features: [
      "Antarys Database",
      "Vertically Scaled by default",
      "Supports every feature",
      "Best for your hobby LLM project",
    ],
    featured: false,
    classes:
      "glass-2 from-card/100 to-card/100 dark:glass-3 after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] dark:after:bg-purple-500/30 after:blur-[72px]",
  },
];

export default function Downloads() {
  return (
    <div className="py-16 relative" id="get-started">
      <div className="bg-neutral-900/50 w-full h-full absolute top-0 bottom-0 left-0 right-0 fade-layer-bottom -z-10"></div>
      <div className="mx-auto flex w-full flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
            Get Started in Minutes
          </h2>
          <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
            Antarys can be self hosted and work offline with your existing LLM
            stack, build your dream AI app now with our most performant database
            solution
          </p>

          <Link
            href={"https://github.com/antarys-ai/antarys-releases/"}
            target="_blank"
          >
            <Badge
              variant="outline"
              className="px-4 py-2 rounded-full flex items-center justify-center gap-2"
            >
              <PartyPopper />
              <span>Read Starter Guide</span>
            </Badge>
          </Link>
        </div>
        <div className="mx-auto grid max-w-container grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={cn(
                "relative flex max-w-container flex-col gap-6 overflow-hidden rounded-2xl p-8 shadow-xl",
                platform.classes
              )}
            >
              <hr
                className={cn(
                  "absolute left-[10%] top-0 h-[1px] w-[80%] border-0 bg-gradient-to-r from-transparent via-foreground/60 to-transparent",
                  platform.featured && "via-brand"
                )}
              />
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                  <h2 className="flex items-center gap-2 font-bold">
                    {platform.icon && (
                      <div className="flex items-center gap-2 text-muted-foreground">
                        {platform.icon}
                      </div>
                    )}
                    <span className="text-5xl">{platform.name}</span>
                  </h2>
                  <p className="max-w-[220px] text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
                <Button variant={platform.cta.variant} size="lg" asChild>
                  <Link href={platform.cta.href}>{platform.cta.label}</Link>
                </Button>
                <p className="min-h-[40px] max-w-[220px] text-sm text-muted-foreground">
                  {platform.priceNote}
                </p>
                <hr className="border-input" />
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  {platform.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check className="h-4 w-4 shrink-0 text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
