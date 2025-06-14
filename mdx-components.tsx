import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import type { MDXComponents } from "mdx/types";
import { AntarysEdgeFeatures } from "./components/ui/antarys-edge-features";
import DatabaseWithRestApi from "./components/ui/database-with-rest-api";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    AntarysEdgeFeatures,
    DatabaseWithRestApi,
    ...components,
  };
}
