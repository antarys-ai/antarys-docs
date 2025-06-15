import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Twitter, MessageCircle, Code, Laptop2Icon } from "lucide-react";

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
  links: [
    {
      text: "API",
      url: "/docs/",
      icon: <Code className="w-4 h-4" />,
    },
    {
      text: "Samples",
      url: "/docs/python/samples",
      icon: <Laptop2Icon className="w-4 h-4" />,
    },
    {
      text: "Twitter",
      url: "https://x.com/antarys_ai",
      icon: <Twitter className="w-4 h-4" />,
      external: true,
    },
    {
      text: "Discord",
      url: "https://discord.gg/qt7sbK6M",
      icon: <MessageCircle className="w-4 h-4" />,
      external: true,
    },
  ],
  themeSwitch: {
    enabled: false,
  },
  githubUrl: "https://github.com/antarys-ai",
};
