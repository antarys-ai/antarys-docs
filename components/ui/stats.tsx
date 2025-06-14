/* eslint-disable @next/next/no-img-element */

interface StatItemProps {
  header: string;
  count: string;
  description: string;
}

export function StatItem({ header, count, description }: StatItemProps) {
  return (
    <div className="flex flex-col items-start gap-3 text-left">
      <div className="text-sm font-semibold text-muted-foreground uppercase">
        {header}
      </div>
      <div className="flex items-baseline gap-2">
        <div className="bg-gradient-to-r from-foreground to-foreground bg-clip-text text-4xl font-medium text-transparent drop-shadow-[2px_1px_24px_hsla(var(--brand-foreground))] transition-all duration-300 sm:text-5xl md:text-6xl dark:to-brand">
          {count}
        </div>
      </div>
      <div className="text-pretty text-sm font-semibold text-muted-foreground">
        {description}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center px-8 sm:px-4 py-12 text-foreground">
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <StatItem
            header="upto"
            count="2-8x"
            description="faster vector read/write"
          />
          <StatItem
            header="over"
            count="88%"
            description="vector similarity accuracy"
          />
          <StatItem header="below" count="25%" description="CPU consumption" />
          <StatItem
            header="upto"
            count="10x"
            description="faster image searching"
          />
        </div>
      </div>

      <TrustedBy />
    </div>
  );
}

function TrustedBy() {
  return (
    <div className="flex max-w-80 items-center rounded-full border border-border bg-background p-1 shadow shadow-black/5 mt-14">
      <div className="flex -space-x-1.5">
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-03.jpg"
          width={20}
          height={20}
          alt="Avatar 01"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-04.jpg"
          width={20}
          height={20}
          alt="Avatar 02"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-05.jpg"
          width={20}
          height={20}
          alt="Avatar 03"
        />
        <img
          className="rounded-full ring-1 ring-background"
          src="https://originui.com/avatar-80-06.jpg"
          width={20}
          height={20}
          alt="Avatar 04"
        />
      </div>
      <p className="px-2 text-xs text-muted-foreground">
        Being Actively Tested By Developers
      </p>
    </div>
  );
}
