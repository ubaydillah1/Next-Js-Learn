"use client";

import React from "react";
import { useTheme } from "@/components/themeProvider";

export default function ClientRoutePage() {
  const theme = useTheme();

  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Route page</h1>
    </div>
  );
}
