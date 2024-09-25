import "../globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { MusicProvider } from '@/contexts/MusicContext';
import SiteBar from "@/components/siteBar/SiteBar";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MusicProvider>
            <SiteBar>
            {children}
            </SiteBar>
          </MusicProvider>
        </ThemeProvider>
  );
}
