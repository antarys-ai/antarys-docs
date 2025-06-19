import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Geist, Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import RouterTransition from "@/components/ui/router-transition";

const customFont = Geist({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Antarys - Turn any Data into Intelligent Data",
    default: "Antarys - Turn any Data into Intelligent Data",
  },
  description:
    "AI embeddings and Large Language Models depend on your vector data and we are transforming the paradigm of AI data industry",
  keywords: [
    // Core vector database terms
    "vector database",
    "vector search",
    "vector storage",
    "vector indexing",
    "similarity search",
    "nearest neighbor search",
    "approximate nearest neighbor",
    "ANN search",
    "HNSW",
    "vector embeddings",

    // AI/ML specific
    "AI embeddings",
    "machine learning embeddings",
    "large language models",
    "LLM",
    "artificial intelligence",
    "deep learning",
    "neural networks",
    "transformer models",
    "semantic search",
    "natural language processing",
    "NLP",
    "computer vision",
    "multimodal AI",

    // Technical/Performance
    "high-performance database",
    "real-time vector search",
    "scalable vector database",
    "distributed vector storage",
    "vector analytics",
    "embedding storage",
    "vector similarity",
    "cosine similarity",
    "euclidean distance",
    "dot product similarity",

    // Industry/Competition
    "Pinecone alternative",
    "Weaviate alternative",
    "Chroma alternative",
    "Qdrant alternative",
    "Milvus alternative",
    "vector database comparison",
    "best vector database",
    "fastest vector database",

    // Use cases
    "recommendation systems",
    "RAG",
    "retrieval augmented generation",
    "chatbot memory",
    "document search",
    "image similarity",
    "content recommendation",
    "personalization",
    "search engine",
    "knowledge base",
    "FAQ systems",
    "customer support AI",

    // Technology stack
    "Python vector database",
    "REST API vector database",
    "HTTP/2 vector database",
    "gRPC vector database",
    "cloud vector database",
    "edge computing",
    "edge AI",
    "embedded vector database",

    // Data types
    "OpenAI embeddings",
    "sentence transformers",
    "BERT embeddings",
    "GPT embeddings",
    "text embeddings",
    "image embeddings",
    "audio embeddings",
    "video embeddings",

    // Business/Enterprise
    "enterprise vector database",
    "production vector database",
    "vector database optimization",
    "AI infrastructure",
    "ML infrastructure",
    "data intelligence",
    "intelligent data platform",
    "AI data platform",
    "vector data management",
    "embedding management",

    // Performance keywords
    "low latency vector search",
    "high throughput vector database",
    "vector database performance",
    "fast vector search",
    "optimized vector storage",
    "memory efficient vectors",
    "batch vector operations",
    "parallel vector processing",
  ],
  authors: [{ name: "Antarys Docs", url: "https://docs.antarys.ai" }],
  creator: "Antarys AI",
  publisher: "Antarys AI",
  metadataBase: new URL("https://docs.antarys.ai"),
  alternates: {
    canonical: "https://antarys.ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Antarys Docs - Turn any Data into Intelligent Data",
    description:
      "AI embeddings and Large Language Models depend on your vector data and we are transforming the paradigm of AI data industry",
    url: "https://docs.antarys.ai/",
    siteName: "Antarys.ai",
    images: [
      {
        url: "https://docs.antarys.ai/frame_big.png",
        width: 1200,
        height: 630,
        alt: "Antarys AI - High-Performance Vector Database",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@antarys_ai",
    creator: "@antarys_ai",
    title: "Antarys Docs - Turn any Data into Intelligent Data",
    description:
      "AI embeddings and Large Language Models depend on your vector data and we are transforming the paradigm of AI data industry",
    images: ["https://docs.antarys.ai/frame_big.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  classification: "AI Database Technology",
  other: {
    "google-site-verification": "aFEiuRq_u5QXOnrlqWOJUH3gS6pHDN4RxLMneWYNiMA",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={customFont.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RouterTransition>
          <RootProvider
            theme={{
              forcedTheme: "dark",
              enableSystem: false,
              defaultTheme: "dark",
              enabled: false,
            }}
          >
            {children}
          </RootProvider>
        </RouterTransition>
      </body>
    </html>
  );
}
