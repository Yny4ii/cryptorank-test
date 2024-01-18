"use client";
import React from "react";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 36000,
        revalidateIfStale: true,
        revalidateOnFocus: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
