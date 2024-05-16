"use client";

import React, { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";

import QueryClient from "@/app/queryClient";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  const [queryClient] = useState(() => QueryClient);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
