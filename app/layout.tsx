import "./globals.css";
import { Open_Sans } from "next/font/google";
import Providers from "@/components/providers";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Raidbuddy",
  description: "Take your raids to the next level.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="flex flex-col items-center">
        <Providers>
          <div className="container max-w-7xl">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
