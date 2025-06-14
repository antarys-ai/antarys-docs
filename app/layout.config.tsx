import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center font-light">
        <img
          src="/logo-black.png"
          alt="Antarys"
          width={48}
          className="block dark:hidden"
        />
        <img
          src="/logo.png"
          alt="Antarys"
          width={48}
          className="hidden dark:block"
        />
        <p className="mx-2">|</p>
        <p className="font-bold">Antarys</p>
      </div>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
  links: [],
  themeSwitch: {
    enabled: false,
  },
  githubUrl: "https://github.com/antarys-ai",
};
