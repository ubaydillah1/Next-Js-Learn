"use client";

import React from "react";
import { useTheme } from "@/components/themeProvider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clientSideFunction();

  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Route page</h1>
      <p>{result}</p>
    </div>
  );
}
