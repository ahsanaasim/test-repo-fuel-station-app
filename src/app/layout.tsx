import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import { UiStateProvider } from "@/contexts/ui-state-context";
import { PRODUCT } from "@/data/mock";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${PRODUCT.name} · Fuel station ops`,
  description: PRODUCT.overview,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable} antialiased`}>
        <UiStateProvider>{children}</UiStateProvider>
      </body>
    </html>
  );
}
