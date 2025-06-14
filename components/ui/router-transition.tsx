"use client";

import React from "react";
import { ProgressProvider } from "@bprogress/next/app";

function RouterTransition({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProgressProvider
      height="1px"
      color="#fff"
      options={{ showSpinner: false }}
    >
      {children}
    </ProgressProvider>
  );
}

export default RouterTransition;
