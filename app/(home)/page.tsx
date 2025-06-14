import Stats from "@/components/ui/stats";
import Link from "next/link";
import { Cpu, Lock, Sparkles, Zap, ArrowRight } from "lucide-react";
import FeaturesSection from "@/components/ui/features";
import { APIPlatform } from "@/components/ui/api-platform";
import { ChangelogsNPlans } from "@/components/ui/changelog-plans";
import Downloads from "@/components/ui/downloads";
import { LandingFooter } from "@/components/ui/landing-footer";

export default function HomePage() {
  return (
    <>
      <div className="w-full pt-52 pb-42 rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="flex flex-col items-end absolute -right-60 -top-10 blur-xl z-0 ">
          <div className="h-[11rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-white to-sky-600"></div>
          <div className="h-[12rem] rounded-full w-[90rem] z-1 bg-gradient-to-b blur-[6rem] from-purple-900 to-yellow-400"></div>
          <div className="h-[10rem] rounded-full w-[60rem] z-1 bg-gradient-to-b blur-[6rem] from-yellow-600 to-sky-500"></div>
        </div>

        {/* Content container */}
        <div className="relative z-10">
          {/* Badge */}
          <Link href={"http://github.com/antarys-ai/benchmark"} target="_blank">
            <div className="mx-auto mt-6 flex max-w-fit items-center justify-center space-x-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-white">
                Asses Performance
              </span>
              <ArrowRight className="h-4 w-4 text-white" />
            </div>
          </Link>

          {/* Hero section */}
          <div className="container mx-auto mt-12 px-4 text-center">
            <h1 className="text-4xl tracking-tight sm:text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Antarys
            </h1>
            <h1 className="bg-gradient-to-r font-extrabold from-foreground to-foreground bg-clip-text text-5xl text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-6xl md:text-7xl dark:to-brand">
              Human Guidelines
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Our state of the art AHNSW Algorithim, built from the ground up
              for excellent Accuracy and Performance
            </p>
            <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href={"/#get-started"}>
                <button className="h-12 cursor-pointer rounded-full bg-white px-8 text-base font-medium text-black hover:bg-white/90">
                  Download Now
                </button>
              </Link>

              <Link href={"/docs"}>
                <button className="h-12 cursor-pointer rounded-full border border-gray-600 px-8 text-base font-medium text-white hover:bg-white/10">
                  See Docs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Stats />
      <APIPlatform />
      <ScalingTeams />
      <FeaturesSection />

      <section className="pt-16 mt-8 bg-black fade-layer-bottom">
        <ChangelogsNPlans />
      </section>

      <Downloads />
      <LandingFooter />
    </>
  );
}

function ScalingTeams() {
  return (
    <section className="overflow-hidden py-14 md:py-24 bg-black fade-layer">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Built for Scaling teams
          </h2>
          <p className="mt-6 text-lg">
            Empower your team with workflows that adapt to your needs, whether
            you prefer to build offline, or on the cloud with our infrastructre
          </p>
        </div>
        <div className="mt-24 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Fast</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Our custom Async HNSW searching algorithm makes searching
              inherently faster
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Scalable</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Pick your way, deploy your own server with vertical scaling or go
              horizontal with our cloud
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Lock className="size-4" />
              <h3 className="text-sm font-medium">Security</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              You own your data, and we take it very seriously, our vector db
              comes with built in encryption
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />

              <h3 className="text-sm font-medium">Search</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Search anything! We support all major vector embeddings. By nature
              we are a multimodal vector query system
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
