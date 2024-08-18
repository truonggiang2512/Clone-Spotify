"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// Explicitly cast the return type to a React.FC or ReactElement
const FixedNextThemesProvider =
  NextThemesProvider as React.FC<ThemeProviderProps>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true); // Client-side only
  }, []);

  if (!mounted) {
    return <>{children}</>; // Return children without theme provider during SSR
  }

  return (
    <FixedNextThemesProvider {...props}>{children}</FixedNextThemesProvider>
  );
}
