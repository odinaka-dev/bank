import type {Metadata} from 'next';
import { Geist_Mono } from 'next/font/google';
// import { GeistSans } from "geist/font/sans"; // Removed unused import
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Example using GeistSans if it were needed for body text:
// const geistSans = GeistSans({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Transaction Teller',
  description: 'Modern Bank Web App by Firebase Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply Geist Mono to the body, Geist Sans could be applied here too if needed */}
      <body className={`${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
