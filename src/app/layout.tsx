import "@/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "@/trpc/react";
import { Toaster } from "@/components/ui/toaster";
import { env } from "@/env";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getServerAuthSession } from "@/server/auth";
import { SessionProvider, useSession } from "next-auth/react";
const defaultUrl = env.VERCEL_URL
  ? `https://${env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CEFAUC | Iglesia ",
  description: "Una inglesia que te abraza con amor",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="flex min-h-screen w-full flex-col">
          <TRPCReactProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >

              {children}
            </ThemeProvider>
          </TRPCReactProvider>
          <Toaster />
        </div>
      </body>
    </html >
  );
}
