import { Chivo } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "MonoMinimal",
  description: "A design system experiment by Hélio Sal",
};

export default function RootLayout({ children }) {
  return (
    <NextUIProvider>

      <html lang="en">
        <body className={chivo.className}>{children}</body>
      </html>
    </NextUIProvider>

  );
}
