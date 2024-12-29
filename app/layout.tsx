import type { Metadata } from "next";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";
import { RobotoCondensed } from "../utils/customFont"
import "./globals.css";
import { NextUIProvider } from "@nextui-org/system";


const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "AMRIT Multispeciality Hospital",
  description: "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} ${RobotoCondensed.variable} flex justify-center items-center font-sans antialiased cursor-default select-none`}>
        <div className="min-h-screen max-w-screen-2xl w-full">
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </div>
      </body>
    </html>
  );
}
