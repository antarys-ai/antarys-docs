"use client";

import { Box, Brain, Search, Server, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function AntarysEdgeFeatures() {
  return (
    <div id="features" className="cursor-pointer">
      <ul className="grid grid-cols-1 grid-rows-none gap-x-4 gap-y-0 md:grid-cols-12 md:grid-rows-3 xl:max-h-[30rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Micro LLM & Kernel Registry"
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Vector Database & Data Infra"
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Brain className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="NATIVE AI"
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Vectorisation & Embedding Platform"
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Server className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Antarys Compute for Private Data"
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
}

const GridItem = ({ area, icon, title }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full border p-1 rounded-xl">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-4 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <h3 className="font-sans -tracking-4 text-balance text-white font-thin text-2xl">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
};
