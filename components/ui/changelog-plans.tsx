import { Changelog } from "@/components/ui/changelog";

export const ChangelogsNPlans = () => {
  return (
    <Changelog
      title="Roadmap"
      description="Our platform and tools are continuously evolving"
      entries={[
        {
          version: "Version 0.0.0",
          date: "01 June 2025",
          title: "We started Antarys",
          description:
            "After months of research and debugging, we are finally opening up our beta release to the world, with world class performance and continuous improvements on the go",
          items: [
            "Release of our vector database",
            "Release for Apple ARM Chips",
            "Release for x64 Linux",
            "HTTP2 supported python clients",
            "Public beta",
          ],

          button: {
            url: "#get-started",
            text: "Download Now",
          },
        },
        {
          version: "Version 0.2.0",
          date: "15 July 2025",
          title: "gRPC update",
          description:
            "For reducing CPU cost and latency over client-to-server, we will adopt to a gRPC server, expected to release mid July",
          items: [
            "gRPC Update",
            "Support for Apple Intel",
            "Support for Apple ARM",
            "Support for Linux x86 and x64",
            "Support for Windows x86 and x64",
            "Python client update for gRPC",
            "Typescript client",
          ],
        },
        {
          version: "Version 0.3.0",
          date: "15 September 2025",
          title: "Ecosystem Update",
          description: "Full First party support for AI ecosystem via Antarys",
          items: [
            "native langchain plugins",
            "support for major languages",
            "support for major AI tools",
          ],
        },
        {
          version: "ONGOING",
          date: "01 January 2026",
          title: "Antarys Cloud",
          description:
            "We are expecting to launch our first public preview for Antarys Cloud, bringing you the complete AI data infrastructre for enterprise",
        },
        {
          version: "ONGOING",
          date: "01 March 2026",
          title: "Antarys Edge",
          description:
            "We are continuously working to make LLMs work everywhere, to learn more about it book a call and hear from our founders",

          button: {
            url: "https://calendly.com/antarys-ai/30min",
            text: "Jump on a call",
          },
        },
      ]}
    />
  );
};
