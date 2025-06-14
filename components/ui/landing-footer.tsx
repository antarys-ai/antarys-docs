import React from "react";

import { Footer, FooterBottom } from "@/components/ui/footer";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Link from "next/link";

export function LandingFooter() {
  return (
    <div>
      <LandingFooterText />
      <footer className="w-full bg-background px-4 z-10">
        <div className="mx-auto max-w-container">
          <Footer className="pt-0">
            <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
              <div>© 2025 Antarys AI. All rights reserved</div>
              <div className="flex items-center gap-4">
                <Link target="_blank" href={"https://x.com/antarys_ai"}>
                  X
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/antarys-ai/"}
                >
                  LinkedIn
                </Link>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </footer>
    </div>
  );
}

export function LandingFooterText() {
  return (
    <div className="h-[8rem] sm:md-[10rem] md:h-[12rem] lg:h-[17rem] flex items-center justify-center">
      <TextHoverEffect text="Antarys AI" />
    </div>
  );
}
